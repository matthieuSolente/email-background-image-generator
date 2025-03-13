# Email background image generator
An email background image Generator

## Outlook support

This generator allows you to create an HTML block with a background image, compatible with Outlook. Compared to Stig's well-known tool, [backgrounds.cm](https://backgrounds.cm/), this one uses the `v:image` vml component for better compatibility across all Outlook versions, especially with Outlook Windows 10 and 11.

## Vertical align

It also offers the ability to position your content vertically on the image. (`top`,  `middle` or `bottom`)

Please feel free to use it, test it, and report any areas for improvement or bugs you find.

### To note

When using background images in Outlook, we often encounter rendering issues with the image. In traditional web design, the image adapts based on the height you specify in the block. Cropping is automatic. 

In Outlook, a [crop function](https://learn.microsoft.com/fr-fr/windows/win32/vml/web-workshop---how-to-use-vml-on-web-pages-----image--element), which allows you to crop the image, does exist in VML. But in a generator environment, without knowing the height the content will have, it's impossible to predict the necessary cropping.

If you specify a block height lower than the default height of your image, it won't be cropped, but Outlook will squash the image to fit within the specified height. It will therefore be shrunk.

To avoid having a shrunken or distorted image, for VML, you must provide an image: 
- either with intrinsic proportions and specify the corresponding width and height for the block, 
- or in retina mode (x2 or more), but always maintaining the original proportions. Without this precaution, your image risks being shriveled.
