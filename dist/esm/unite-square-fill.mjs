export const name="unite-square-fill";
export const id="dl_68d6f0a2a48c4254b186";
export const url=new URL("../icons/U/unite-square-fill.svg?v=7749d440abe2b5dd58ebf2cac61a3424c7c40a74740ee4987ec13a6aa64f8ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
