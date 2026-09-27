export const name="lucid_2-file-down";
export const id="dl_24930fe90af4415e90c2";
export const url=new URL("../icons/lucid_2-file-down.svg?v=10e4e5744ba02bf8f50a758162f86bbb6e1515c0f64df031cd4f7899f76e9531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
