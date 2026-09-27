export const name="van-fill";
export const id="dl_ac7a1b8c1de51e3476b1";
export const url=new URL("../icons/van-fill.svg?v=8ddf471c208dd3232444ab6cd9649be4ed38f6ebb08f37ccc4288ba47b25b1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
