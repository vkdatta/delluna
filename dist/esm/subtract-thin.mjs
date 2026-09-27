export const name="subtract-thin";
export const id="dl_ec51daa1497e0e852c72";
export const url=new URL("../icons/subtract-thin.svg?v=5e93a860245be45b9c9887e794d7f036ceebbc9d9e32e2d2de94c891a5637f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
