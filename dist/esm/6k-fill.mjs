export const name="6k-fill";
export const id="dl_fc3b28193f32d687e9e9";
export const url=new URL("../icons/6k-fill.svg?v=9caf968fb7cf58b4145fc9bf4e0ee6bcddcdece2f0c7cbe3a98503280fd35076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
