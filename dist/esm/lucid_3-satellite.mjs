export const name="lucid_3-satellite";
export const id="dl_345a0f5d1c774463bd00";
export const url=new URL("../icons/lucid_3-satellite.svg?v=197a2175548b8cb93595a098ccf5c2e7c5d46194a09629f751e088071075444a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
