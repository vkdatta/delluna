export const name="logo_dev-fill";
export const id="dl_22ca6e9074e816d0264e";
export const url=new URL("../icons/logo_dev-fill.svg?v=0bec89f6401198e58a39f2dfe781891b5a8cb06837749d99cf61de2ff7baa9c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
