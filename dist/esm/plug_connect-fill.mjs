export const name="plug_connect-fill";
export const id="dl_637de75eae86f3aca4c6";
export const url=new URL("../icons/plug_connect-fill.svg?v=fb29e9feb27e6a272005dee62e940ef407390dd97504ac2cb42814fc5df382b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
