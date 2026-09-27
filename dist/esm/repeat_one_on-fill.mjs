export const name="repeat_one_on-fill";
export const id="dl_4f9135bac0f58e60b972";
export const url=new URL("../icons/repeat_one_on-fill.svg?v=7f2b1310dfe40427ed545a9aa9e998dfa514112f568a1b831158c06d5825843f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
