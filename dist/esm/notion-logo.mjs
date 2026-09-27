export const name="notion-logo";
export const id="dl_56845ab692944d56b30a";
export const url=new URL("../icons/notion-logo.svg?v=d3a8605f3a60adc5e04d40f95875bfbfb92111ce3b4cb1be80b1e7271a9cde79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
