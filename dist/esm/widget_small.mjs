export const name="widget_small";
export const id="dl_3dc355ca0f05fbc3d178";
export const url=new URL("../icons/widget_small.svg?v=309fa4765b9d0e25a6f13db7ae72788551837dc3e76ce6a36e719d9339f41cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
