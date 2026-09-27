export const name="app-window-fill";
export const id="dl_d817206a374d49a99df9";
export const url=new URL("../icons/app-window-fill.svg?v=38aef8fe58a5e69a0b913eb44d71315f22ebf2a2edb23d676bfa4b4b0ebbeabe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
