export const name="lucid_1-chevrons-right-left";
export const id="dl_05275c933dfc4370b152";
export const url=new URL("../icons/lucid_1-chevrons-right-left.svg?v=8392fe610e61dc5843908d3fa7b95d8c0e87f31bb1fdc3b8e702da94f0335b96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
