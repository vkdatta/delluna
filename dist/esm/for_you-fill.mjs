export const name="for_you-fill";
export const id="dl_ac9c716c47c3639600ef";
export const url=new URL("../icons/for_you-fill.svg?v=06fff4393f8ab9c6ff6956c17b01ad2b04177d5690eeee7daef1bd5e7c7e000a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
