export const name="doorbell";
export const id="dl_c3393ac89152e6e896b8";
export const url=new URL("../icons/doorbell.svg?v=0b22cb295e45b2d081ae49b2e765df3cff72bb4e62bb98a18f197dd6d14fd225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
