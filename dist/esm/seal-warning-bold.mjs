export const name="seal-warning-bold";
export const id="dl_c41b0b54a1e64510a08a";
export const url=new URL("../icons/S/seal-warning-bold.svg?v=4b118f38abc22df7d5af68e0bb496e7b95cded0bb91ad939375155f41626d48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
