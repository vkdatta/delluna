export const name="taxi-light";
export const id="dl_7ab7c67c32fa4ac68b8b";
export const url=new URL("../icons/T/taxi-light.svg?v=a82f9749b5755e3ab6a1544ac005524d61bbe8d5c10938f116b93842a4143053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
