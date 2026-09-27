export const name="fish-simple-fill";
export const id="dl_24d5b383561541c487d3";
export const url=new URL("../icons/fish-simple-fill.svg?v=27151d5a7171b30480afb87e98ebc529da511ce0224812547e54b93b58054ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
