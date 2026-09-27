export const name="projector-screen-fill";
export const id="dl_a5c86ee7f64f4799b527";
export const url=new URL("../icons/projector-screen-fill.svg?v=146187470b8fc443958688073b576b00121cd042767a2d370ae32882e995922c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
