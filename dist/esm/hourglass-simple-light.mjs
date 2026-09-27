export const name="hourglass-simple-light";
export const id="dl_a9e0f68f62944aaebcee";
export const url=new URL("../icons/hourglass-simple-light.svg?v=17f05491fbbc84f1847a4f6dfc272fd1de5056a586910cdaeba0214e9295ac95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
