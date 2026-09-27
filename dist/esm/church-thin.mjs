export const name="church-thin";
export const id="dl_12d82c272c14428fa44e";
export const url=new URL("../icons/church-thin.svg?v=8b9c831b2012d8ad3b0b477461945799d0ac8fddca1ec99efe804059a0389d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
