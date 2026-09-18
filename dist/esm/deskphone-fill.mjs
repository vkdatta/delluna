export const name="deskphone-fill";
export const id="dl_eb19c0b956e84364bac8";
export const url=new URL("../icons/deskphone-fill.svg?v=ac78f6abb9c83f54df5bcb2656987965a4b0e026ba6227e0359af63eda3a00c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
