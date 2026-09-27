export const name="file-ppt-bold";
export const id="dl_4cb38116fa0046e397e5";
export const url=new URL("../icons/file-ppt-bold.svg?v=3780fff12b009ff30e87d3e4a49872bd07b234b2870a0798c6a9ecdff93d6968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
