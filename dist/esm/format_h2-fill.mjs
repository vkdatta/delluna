export const name="format_h2-fill";
export const id="dl_d9167d9e866620fe88e5";
export const url=new URL("../icons/format_h2-fill.svg?v=894a96643d9227d0dcc296a90ee3a349b5209c326c11ed614c8a868b861b3062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
