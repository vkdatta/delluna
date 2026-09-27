export const name="nest_farsight_cool-fill";
export const id="dl_b377ce2f20a8b17e5d95";
export const url=new URL("../icons/nest_farsight_cool-fill.svg?v=9672ba99e0515cf3c290d7b845209c2555190fee21cfe8753072eea8d64d2eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
