export const name="image_inset-fill";
export const id="dl_17acff0f5c351b04f5e0";
export const url=new URL("../icons/image_inset-fill.svg?v=bb38500837875eff95e50d06451886684538c18eb1ef0cec249cd9165acd4064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
