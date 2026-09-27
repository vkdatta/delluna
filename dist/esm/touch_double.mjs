export const name="touch_double";
export const id="dl_c247d3c5ea8198f27da1";
export const url=new URL("../icons/touch_double.svg?v=664555eae2467095fec26e46b4cbda652af79912b8d4f85fc39ca6c97c03f6da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
