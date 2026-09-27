export const name="vo2_max-fill";
export const id="dl_09c77d5058064ee846c7";
export const url=new URL("../icons/vo2_max-fill.svg?v=950f0a2ab96b2211f9647cae3b4ce64b36e0aff0370e92474b757df711682b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
