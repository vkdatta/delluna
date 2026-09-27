export const name="lucid_3-ship";
export const id="dl_7fed8ae44a02434aac74";
export const url=new URL("../icons/lucid_3-ship.svg?v=63ff1f50c7a23f63baff74a608ebd7b0937cffbb994a83748542db0eaf65aa13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
