export const name="household_supplies-fill";
export const id="dl_8a685920e34b09b3fb4a";
export const url=new URL("../icons/household_supplies-fill.svg?v=bd089e48eaef6f38a420629031028cc5b256625277a5ef2ff20b8fb8cf2bda0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
