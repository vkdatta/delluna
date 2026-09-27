export const name="x-circle-thin";
export const id="dl_7871552f4a489a612f85";
export const url=new URL("../icons/x-circle-thin.svg?v=74aff4fbb55f9173501e70fc94e7ea752b03d3538ad23fb4f6c0a3fa5ce7d33e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
