export const name="grid_off";
export const id="dl_e185d18d83ac1e2943ef";
export const url=new URL("../icons/grid_off.svg?v=89b913f4e60ec5cc3e5b24a098d79b36e0d2ce088695e266a1c035f895f85ad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
