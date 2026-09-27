export const name="piggy-bank-light";
export const id="dl_5b01dc5670994da9995c";
export const url=new URL("../icons/piggy-bank-light.svg?v=48dd0884fea6e337f35af36afeb5c677c10ab03b23c4c016ca0a80f5581d929c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
