export const name="disc-fill";
export const id="dl_e03a5ab1744d4407b4a7";
export const url=new URL("../icons/disc-fill.svg?v=e76961fd606810722f11c4f9807f29e4d66ce9f21a683dfb5532a9c81d11919a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
