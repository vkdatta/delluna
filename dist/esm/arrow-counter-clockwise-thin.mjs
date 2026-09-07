export const name="arrow-counter-clockwise-thin";
export const id="dl_0aa7794e7f2744c88d4b";
export const url=new URL("../icons/arrow-counter-clockwise-thin.svg?v=4b68f3454c19d9e598edbc5be4f3af91e79dd4a6505313bef8eb396d549b77cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
