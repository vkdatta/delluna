export const name="flag-duotone";
export const id="dl_2b7edcee814f4760a314";
export const url=new URL("../icons/flag-duotone.svg?v=49b40ca61733591e08979362b20ef53d833d177365bbea6113f2478bbf161f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
