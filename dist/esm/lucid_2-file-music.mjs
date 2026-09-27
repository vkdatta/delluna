export const name="lucid_2-file-music";
export const id="dl_f98d265c85da4c868a53";
export const url=new URL("../icons/lucid_2-file-music.svg?v=af3595ca0c3999fc67d74b58ace406a724135d96d7b41e2336c054880f16d8d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
