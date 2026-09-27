export const name="detector_status";
export const id="dl_371f41e79d570998ee8e";
export const url=new URL("../icons/detector_status.svg?v=bca7f172f9a4c55af87a89211bc9f1b7e60e1aa1d3b596da8ce45bce2e83b024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
