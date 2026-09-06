export const name="number-circle-zero-bold";
export const id="dl_3b33e851942249cd890f";
export const url=new URL("../icons/number-circle-zero-bold.svg?v=46dbf55c0428bd13a10fb5bddfe684422a0fab7ac92ad6fa44355a60571014b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
