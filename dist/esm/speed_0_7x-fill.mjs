export const name="speed_0_7x-fill";
export const id="dl_874dc15dda751e70283d";
export const url=new URL("../icons/speed_0_7x-fill.svg?v=04515ba620360fa35a1f5ff0f1419fe8aaaa939c79f094b01a1b0d2bb190d6d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
