export const name="chips-fill";
export const id="dl_b9a3429d21cc0b9bec4a";
export const url=new URL("../icons/chips-fill.svg?v=d87dac0aa02880d9c2022ea2925cce2e5c3ab347ba8b4fc1182e3ce4ea6f1495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
