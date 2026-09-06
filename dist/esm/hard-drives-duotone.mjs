export const name="hard-drives-duotone";
export const id="dl_704ba84a54474daebec2";
export const url=new URL("../icons/hard-drives-duotone.svg?v=ded508a98776d1f04adf05371d1f1fc9e8be8ddcf3a221e7d749af5f486dd452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
