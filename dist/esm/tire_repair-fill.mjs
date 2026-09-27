export const name="tire_repair-fill";
export const id="dl_420cb53a9a2f03cfae88";
export const url=new URL("../icons/tire_repair-fill.svg?v=811cec3f41ee9f298a3a82b59d38f0ca1b743dfe89c0b296daab48efa5e5793f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
