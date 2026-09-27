export const name="video_settings-fill";
export const id="dl_6cac42c9efe6e2c4b4db";
export const url=new URL("../icons/video_settings-fill.svg?v=8623114886c71acbe7772e6b0b4933488e3dfdcfd95f6bcc8607641aab25a2de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
