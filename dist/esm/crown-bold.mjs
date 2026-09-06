export const name="crown-bold";
export const id="dl_47144c4d3c5d4e699bde";
export const url=new URL("../icons/crown-bold.svg?v=da4d0cc4601a0597066dc4d19a62d49a65631d36c3e00b351bcdc269846a5640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
