export const name="text-align-right-bold";
export const id="dl_1a62e953127800836b7e";
export const url=new URL("../icons/text-align-right-bold.svg?v=f53eac8245cd1a304d2c12005eb665ff85eec2b1f119b4a72f468c14fccca5c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
