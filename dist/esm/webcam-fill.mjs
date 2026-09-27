export const name="webcam-fill";
export const id="dl_0d24dd65f1cddbbcca12";
export const url=new URL("../icons/webcam-fill.svg?v=96ccdd095d5c839cd5a086a95814d092ddc01bc5c63a7abe7a72b1f3a92ddcd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
