export const name="lucid_3-notebook-pen";
export const id="dl_512870a037314eb8b05e";
export const url=new URL("../icons/lucid_3-notebook-pen.svg?v=87f19a32d7de585e33b054fd4ac7f0875053d0f5b4f43e271cecaa24a5427d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
