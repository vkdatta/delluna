export const name="bowling-ball-bold";
export const id="dl_6f330d0708e64569ae63";
export const url=new URL("../icons/bowling-ball-bold.svg?v=1bb46bfc41a633b2d1e817d9c91bf4799315dfebe5bce6d08b82a0b640c493d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
