export const name="energy_program_saving";
export const id="dl_58d78f4b28b9090b5925";
export const url=new URL("../icons/energy_program_saving.svg?v=a858c8a4a8e9e5b1a6b20c40d776a692a5ee251ac2aa84d74adeb251a79fc55f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
