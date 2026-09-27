export const name="arrow-circle-up-left";
export const id="dl_964419c527974f21942c";
export const url=new URL("../icons/arrow-circle-up-left.svg?v=b01e8b958a9d714586cbf4406a580ae96557dec95a810a545714f5ba04ff8f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
