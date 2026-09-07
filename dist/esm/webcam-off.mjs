export const name="webcam-off";
export const id="dl_f20a02e01c2948da8c26";
export const url=new URL("../icons/webcam-off.svg?v=f72fa7a9e3636a9f447d1d563daa4686ebe437a1926d0bd7700d89ea101a78bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
