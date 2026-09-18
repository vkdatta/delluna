export const name="night_sight_auto";
export const id="dl_90f4083ab996426db63c";
export const url=new URL("../icons/night_sight_auto.svg?v=8ca80aff3b2e8abdd393101d891d5413c4b2f583c84648f532048fac9259c87c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
