export const name="cloud-check-bold";
export const id="dl_bb7d2f5d397a4357a5a3";
export const url=new URL("../icons/cloud-check-bold.svg?v=e6d28de6f48a1aac13ee0e62426c5e0b65184050021b8dfe09296e7e1a88eb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
