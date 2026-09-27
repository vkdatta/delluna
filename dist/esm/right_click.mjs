export const name="right_click";
export const id="dl_6b567e9c99691885c5c6";
export const url=new URL("../icons/right_click.svg?v=ef8867cdda69701d71c2c71651fe873472be2a1c6989fe7bccc9859e0f4b19dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
