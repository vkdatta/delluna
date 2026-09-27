export const name="vpn_key-fill";
export const id="dl_1c8ccb541b33e402aa16";
export const url=new URL("../icons/vpn_key-fill.svg?v=de3f9581e39c053bc9f6e1664d3a897d15711320602d48632efb0c3585d21ed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
