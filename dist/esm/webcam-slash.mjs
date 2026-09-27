export const name="webcam-slash";
export const id="dl_b004dae2ef135db9302d";
export const url=new URL("../icons/webcam-slash.svg?v=868ff66d43234d0f3cd93e4ca29c15a1efbb34ca9c09e7c33d67f326bfcad52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
