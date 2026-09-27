export const name="text_up-fill";
export const id="dl_91789680ce0a1b3a1284";
export const url=new URL("../icons/text_up-fill.svg?v=975e8416ea7fb408063a4bdb1e7da1d798403d48df4318d36375d109d214574b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
