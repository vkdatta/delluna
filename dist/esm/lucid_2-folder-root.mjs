export const name="lucid_2-folder-root";
export const id="dl_c0025cdc4f074f338a84";
export const url=new URL("../icons/lucid_2-folder-root.svg?v=fc5acfad80ba13bb8e37d467e0a0548bb9d232cc953062f0d5b86c2684c03e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
