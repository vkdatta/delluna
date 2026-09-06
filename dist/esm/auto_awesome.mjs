export const name="auto_awesome";
export const id="dl_7cbe64e0fe7ee1e8b300";
export const url=new URL("../icons/auto_awesome.svg?v=bb026a64de888113c3eaf3d81700e7cdfcd75fc1605f1e0c9f1f8aebbe47974a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
