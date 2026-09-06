export const name="arrow-elbow-down-right-fill";
export const id="dl_80930e6146f4426480e8";
export const url=new URL("../icons/arrow-elbow-down-right-fill.svg?v=1117cccf511d32f76e820e1e81a2536bace5714b87dbad75d463340c93d002c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
