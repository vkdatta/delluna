export const name="arrow_selector_tool";
export const id="dl_e22ccffd6b54b82be4b1";
export const url=new URL("../icons/arrow_selector_tool.svg?v=beb01e23de3776d8fa98be6021c68851c996f97393e927ddc73b99d4eb53281f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
