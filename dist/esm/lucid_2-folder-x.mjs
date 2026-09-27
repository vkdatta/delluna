export const name="lucid_2-folder-x";
export const id="dl_454974821fb04eb8bd07";
export const url=new URL("../icons/lucid_2-folder-x.svg?v=f0876f9aa14e44fc66f0de8e3be51cbe0f3d8492d505e3692c194d800998b895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
