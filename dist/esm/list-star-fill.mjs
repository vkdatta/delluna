export const name="list-star-fill";
export const id="dl_bff78b2ecf1c4545a6cd";
export const url=new URL("../icons/list-star-fill.svg?v=0defe30bdff3f8b10055f8f13c6571c6e815c2030867845fbff35c124bde2fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
