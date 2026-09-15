export const name="fluid_balance-fill";
export const id="dl_c3ea46be0566491dac05";
export const url=new URL("../icons/F/fluid_balance-fill.svg?v=80a5bab4c9c50b3bbd00918b4c8fa779344a21e42abaae4c0a5fb7e516e26d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
