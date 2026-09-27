export const name="webcam-off";
export const id="dl_f20a02e01c2948da8c26";
export const url=new URL("../icons/webcam-off.svg?v=84d7676301b4f2493caf75ed6ee77f49351c280ea25cbd684d26dbb7b79e6b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
