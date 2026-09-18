export const name="fluorescent-fill";
export const id="dl_01d195e762124a4eb199";
export const url=new URL("../icons/fluorescent-fill.svg?v=7bee178fe6c78c86555fc20f038f1c0e47924d5e591b471380ae3201e3169afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
