export const name="lucid_3-radar";
export const id="dl_b6ffc16986ca4785b767";
export const url=new URL("../icons/lucid_3-radar.svg?v=53353a1627000caa7e76b952d135c79e15bb14af05f8a03b5d77cb78bd6c0ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
