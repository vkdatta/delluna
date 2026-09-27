export const name="person_check-fill";
export const id="dl_4f3d14057c69773be806";
export const url=new URL("../icons/person_check-fill.svg?v=962e275f24930872f27356330a0c9ec9f9286bf98074987a20db82e432fc12aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
