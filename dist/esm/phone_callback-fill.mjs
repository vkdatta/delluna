export const name="phone_callback-fill";
export const id="dl_4a1934d1f2ff82981f3b";
export const url=new URL("../icons/phone_callback-fill.svg?v=9f4925d3f4d512fefc2631186756505be0afa47a029a25d89b9c6b2a26a06e81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
