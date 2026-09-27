export const name="waves-ladder";
export const id="dl_13529ff48cd94e9d894c";
export const url=new URL("../icons/waves-ladder.svg?v=305db74aa514ee05eccaaf8aafb8530abb592122119b93ab705c76261f81b67f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
