export const name="paint-brush-duotone";
export const id="dl_dc6d9cc63c31441ca5e1";
export const url=new URL("../icons/paint-brush-duotone.svg?v=24975b2967c7501d7715fa42fb2d9e0579ea3403324f840063cda664d522c30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
