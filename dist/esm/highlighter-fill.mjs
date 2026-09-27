export const name="highlighter-fill";
export const id="dl_01a36db6e2c64e79a92a";
export const url=new URL("../icons/highlighter-fill.svg?v=d2bef8a3d0a04cd01db995fe2e630fd9696be7749452ce1d505ac0bd868ba60c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
