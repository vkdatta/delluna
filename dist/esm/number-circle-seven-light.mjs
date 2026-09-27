export const name="number-circle-seven-light";
export const id="dl_1d07cc6cb79a4a478a45";
export const url=new URL("../icons/number-circle-seven-light.svg?v=1554e0b6830b6d8f83cacb8c8add2ad6f891ef92058fe0145be0828c64aceef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
