export const name="fast_forward-fill";
export const id="dl_06a5c840b45cd0851782";
export const url=new URL("../icons/fast_forward-fill.svg?v=697898560bef279a4b622b3cee369dec9af4273f0440e4e3c19c72caf9ce9a9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
