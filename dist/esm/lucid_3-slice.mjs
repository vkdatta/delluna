export const name="lucid_3-slice";
export const id="dl_709b9b0f33c740089ef8";
export const url=new URL("../icons/lucid_3-slice.svg?v=57d81ee0550556f070761861c608a8a3603cb3b67bb905d208cca8ae3dd826fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
