export const name="dots-three-thin";
export const id="dl_1fa07a5bff364d5780a6";
export const url=new URL("../icons/dots-three-thin.svg?v=2f45b1eb051b117c1cedebf43a26bce5c711391c7ed14dc87ed97b88e7c1e096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
