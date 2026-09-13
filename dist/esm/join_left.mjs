export const name="join_left";
export const id="dl_777c7d2a5a45485e953f";
export const url=new URL("../icons/J/join_left.svg?v=28b33a0ac828c106c28b72f1529ebf7e8a92707367bddfa6c1d2a2e2bdd12ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
