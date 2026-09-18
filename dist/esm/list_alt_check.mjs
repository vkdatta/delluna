export const name="list_alt_check";
export const id="dl_04e66781fc4e4b468aec";
export const url=new URL("../icons/L/list_alt_check.svg?v=14f54eb913d850474fe27d4c0ee24809ec55579a5d9fc46b422455302a9ca3b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
