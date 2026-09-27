export const name="view_day-fill";
export const id="dl_22052890a96fd34a5964";
export const url=new URL("../icons/view_day-fill.svg?v=42a05b7cfb16b1ecbfdc94bf2445884de5485fa11c089df0e6d645c9ccb8b969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
