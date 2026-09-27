export const name="accessibility-fill";
export const id="dl_f2e7918332a2114931cf";
export const url=new URL("../icons/accessibility-fill.svg?v=37fa631630df9d055b75c368559047275f8eaefb5df73ed6d4984930e2053561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
