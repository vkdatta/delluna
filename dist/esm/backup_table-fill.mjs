export const name="backup_table-fill";
export const id="dl_23a22541e10fbd461b6b";
export const url=new URL("../icons/backup_table-fill.svg?v=ece9d0f267d5610fea7fa690b5d85e3252e84b5654d87e25f06e8affacba029e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
