export const name="regular_expression-fill";
export const id="dl_d9f89985c3b31422a9d6";
export const url=new URL("../icons/regular_expression-fill.svg?v=65a6f0e5537daa71a8c1349221751c7324127eb7f657453fb4c3fab1702f919e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
