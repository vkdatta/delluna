export const name="mouse-duotone";
export const id="dl_7fa45f88b0e74a39b8f9";
export const url=new URL("../icons/mouse-duotone.svg?v=bfa71033eb5ba0d13d53aab83cb296a68ee39a08b7df039f6fd03fd66dd32e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
