export const name="cursor-text-thin";
export const id="dl_753400251a7148518a94";
export const url=new URL("../icons/cursor-text-thin.svg?v=43bf3b20a12b6cae432ad6df65e9a1cf438b9e3d881767ca1b6b02b82f719acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
