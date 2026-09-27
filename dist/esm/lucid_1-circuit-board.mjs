export const name="lucid_1-circuit-board";
export const id="dl_4b15e598f43f4bbc9d46";
export const url=new URL("../icons/lucid_1-circuit-board.svg?v=50085821cf0e01f791cd29f7f7ffab064e4e317de1e2037488713cad4edcd6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
