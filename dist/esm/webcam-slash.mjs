export const name="webcam-slash";
export const id="dl_cc6769950a3a6e1fb400";
export const url=new URL("../icons/webcam-slash.svg?v=9dd4a47ba55f68c98543edef64ae99a4feaa1faccd81bbcbac3957d6e48ebb11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
