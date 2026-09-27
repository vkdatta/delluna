export const name="cards-three-fill";
export const id="dl_70a717117f364bcc8d60";
export const url=new URL("../icons/cards-three-fill.svg?v=a93cb531f9931e2e907c784e22d3f426e4558523254d16931b70f5ce3f4ffe9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
