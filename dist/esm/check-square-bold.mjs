export const name="check-square-bold";
export const id="dl_fa70426aee6548a2af3b";
export const url=new URL("../icons/check-square-bold.svg?v=21c90982a1cfbc5e4750e43e45ec540119d891fb4833940d26f41f30b4d2fdff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
