export const name="image_aspect_ratio";
export const id="dl_045bd6abdff39f3ab891";
export const url=new URL("../icons/image_aspect_ratio.svg?v=30ea086ae854fa4b8903281a0b1ea501cc3be46339b53319c49f565e9aef457d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
