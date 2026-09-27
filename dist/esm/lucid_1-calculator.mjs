export const name="lucid_1-calculator";
export const id="dl_4b87c1eda3f444ac9578";
export const url=new URL("../icons/lucid_1-calculator.svg?v=2b304c0ad0441d75ff7e76ce1619a003b425b7ac51b1c01be34364afaecf2127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
