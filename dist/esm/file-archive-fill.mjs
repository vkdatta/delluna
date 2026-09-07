export const name="file-archive-fill";
export const id="dl_3d3b83a490704a47ad1a";
export const url=new URL("../icons/file-archive-fill.svg?v=82e8a7c5ca73fb1dd62f3a5ff1fb1e9225b0f536398843dca568fa830071e132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
