export const name="grid_on";
export const id="dl_5c1a0179111717ab1138";
export const url=new URL("../icons/grid_on.svg?v=4e67b6fdb29ab0b081385b0fef96a656988e8fa92b5a4fa992c914f19fc8194b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
