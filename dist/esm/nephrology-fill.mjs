export const name="nephrology-fill";
export const id="dl_bb9f433199f15cec443c";
export const url=new URL("../icons/nephrology-fill.svg?v=1cbeedf2eae9da7f20a69651392d6bbb707763b0858f74e31ae49abee8bf7f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
