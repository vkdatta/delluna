export const name="energy_savings_leaf-fill";
export const id="dl_3dd4c6a9a255515702bd";
export const url=new URL("../icons/energy_savings_leaf-fill.svg?v=ecdfb829454016ed2bc5d22da5311530453f6a783532839258997bf930a39170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
