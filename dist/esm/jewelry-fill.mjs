export const name="jewelry-fill";
export const id="dl_bc6ab4d25112be676d26";
export const url=new URL("../icons/jewelry-fill.svg?v=d739178970abd9465f276b71d4b9cf0a23e8f158b0d54380e8027ef63ad7d596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
