export const name="speedometer-duotone";
export const id="dl_876d41d1894beac1b296";
export const url=new URL("../icons/speedometer-duotone.svg?v=0388830d900bef2dc04acd759da63c255bef8760e5a209fd02544685905311f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
