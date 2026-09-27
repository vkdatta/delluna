export const name="lucid_1-briefcase";
export const id="dl_78519d027e814f6ca73b";
export const url=new URL("../icons/lucid_1-briefcase.svg?v=24388aa0757b5741e995bc433fc58a27c00dd972ce8d3f7f05c8ec6691a3f427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
