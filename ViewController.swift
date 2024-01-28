import UIKit

class MainViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

    // Connect this to your "Add Story" button in Interface Builder
    @IBAction func addStoryButtonTapped(_ sender: UIButton) {
        let imagePicker = UIImagePickerController()
        imagePicker.delegate = self
        imagePicker.sourceType = .camera // or .photoLibrary if you prefer
        present(imagePicker, animated: true, completion: nil)
    }

    // MARK: - UIImagePickerControllerDelegate

    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        if let image = info[.originalImage] as? UIImage {
            // Handle the selected image here, you can save it, process it, or upload it
            // You might want to navigate the user to another screen for editing or adding captions
        }
        picker.dismiss(animated: true, completion: nil)
    }

    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
    }
}
