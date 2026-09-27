export const name="text_decrease-fill";
export const id="dl_72cdee1097dac3eb26b0";
export const url=new URL("../icons/text_decrease-fill.svg?v=ba3ed0a170c74d559c6ee2478f414b3256f04a9f216bb1b49251d320ebe7dc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
