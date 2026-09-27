export const name="phone-fill";
export const id="dl_57585cec892b47c8bef3";
export const url=new URL("../icons/phone-fill.svg?v=29ded90b26cfa3fb5ca8757d646b2e58a99ec91c6f97f4798c858758346bf44e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
