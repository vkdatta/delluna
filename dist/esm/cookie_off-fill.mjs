export const name="cookie_off-fill";
export const id="dl_3ebeb74bca0f064869eb";
export const url=new URL("../icons/cookie_off-fill.svg?v=70bdb3670d4e177ee4d528d51e4273b534d5656b7c45f9fbef207ffc094305b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
