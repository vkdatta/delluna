export const name="aq";
export const id="dl_9d9549cbd1d3c11f5cd0";
export const url=new URL("../icons/aq.svg?v=d3035d97af467739294612f513397af4daa6bac52785fc3d6a9840e0af9da455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
