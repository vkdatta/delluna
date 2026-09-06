export const name="polygon-bold";
export const id="dl_152ea6bc145f49059a60";
export const url=new URL("../icons/polygon-bold.svg?v=1bad5fa7599664b65644e6ebb85b80aeb3165f9d9c15968f746dfeb291ea4c29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
