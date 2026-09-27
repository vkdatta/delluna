export const name="circles-fill";
export const id="dl_b798710f4848651a5dee";
export const url=new URL("../icons/circles-fill.svg?v=f158b3e03e6934b5d6aefd7ad109615fe8e4c8e20a5361af51b2a903b294fa68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
