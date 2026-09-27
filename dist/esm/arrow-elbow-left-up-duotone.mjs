export const name="arrow-elbow-left-up-duotone";
export const id="dl_b9f9e9fc11634a8692cb";
export const url=new URL("../icons/arrow-elbow-left-up-duotone.svg?v=b9bc4db968e381d2f043bd5208cde7416863e6aa9a05f885ca0db3d3f8aae314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
