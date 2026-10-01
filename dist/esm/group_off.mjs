export const name="group_off";
export const id="dl_b1d20204379d1e6d51ef";
export const url=new URL("../icons/group_off.svg?v=24eb5de3e5f87b276af2697e5c2ecbcc1edcbac5593e5d7f534000df5ee7d7a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
