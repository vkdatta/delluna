export const name="projector-screen-fill";
export const id="dl_a5c86ee7f64f4799b527";
export const url=new URL("../icons/projector-screen-fill.svg?v=58dadb8e2e4446e86842a15e0b72148f6c240cedfbb3dec0227228564b94d1ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
