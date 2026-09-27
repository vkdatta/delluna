export const name="dots-three-thin";
export const id="dl_1fa07a5bff364d5780a6";
export const url=new URL("../icons/dots-three-thin.svg?v=7d33ad1857b754e094dbacae04539832b4420daa8cb902eec7138d113eb9a297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
