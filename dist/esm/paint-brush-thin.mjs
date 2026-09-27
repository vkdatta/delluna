export const name="paint-brush-thin";
export const id="dl_7dba1396e07c4fa78010";
export const url=new URL("../icons/paint-brush-thin.svg?v=d213ddc999c4a2649af8e181d8fadb2f09a0a27dba1f4dee0c544dd394d08fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
