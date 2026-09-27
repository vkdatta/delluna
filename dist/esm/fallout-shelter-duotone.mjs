export const name="fallout-shelter-duotone";
export const id="dl_a1486f53f08847afa925";
export const url=new URL("../icons/fallout-shelter-duotone.svg?v=a8c08ec06e0a0b986b3e89650d397755f634b2f902d4c4198282b3e6422707c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
