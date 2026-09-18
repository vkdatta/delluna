export const name="vertical_shades-fill";
export const id="dl_51122a9703484bfab8a5";
export const url=new URL("../icons/V/vertical_shades-fill.svg?v=0bb9a57ed0753a7aa86a180340e16e4f71376c10977c3cf28f668330ea70ff27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
