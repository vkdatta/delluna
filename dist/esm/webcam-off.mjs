export const name="webcam-off";
export const id="dl_f20a02e01c2948da8c26";
export const url=new URL("../icons/webcam-off.svg?v=d0be859648f3c34c410e7c2edc1914083c471a35c6ea34ecf155c2f72831d331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
