export const name="wand_shine";
export const id="dl_56f1116544128be46d6e";
export const url=new URL("../icons/wand_shine.svg?v=c7975db3908a34e915ad70a00d148bfa792d408b6ee49660dd773b7299980d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
