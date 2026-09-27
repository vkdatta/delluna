export const name="lucid_2-file-check";
export const id="dl_deeee4be7e9b4df698f7";
export const url=new URL("../icons/lucid_2-file-check.svg?v=a7fe30f6f6b03f8e8d90b94d9d5c6c400530b4f7ecf8d5e9e9cb29b31a2a4394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
