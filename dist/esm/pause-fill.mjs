export const name="pause-fill";
export const id="dl_6697f596ab8045d8b2fa";
export const url=new URL("../icons/pause-fill.svg?v=c0f148f89a697864ebcf8f868249d2aa9e14cad3360e67d9cc1a53bd2909b0d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
