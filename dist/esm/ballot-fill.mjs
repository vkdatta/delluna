export const name="ballot-fill";
export const id="dl_05d4c8c93b72aaff9712";
export const url=new URL("../icons/ballot-fill.svg?v=4b635b6daa7a233768c9dd5db53d208f022586b9622d65f6d50d61e8cb9f3240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
