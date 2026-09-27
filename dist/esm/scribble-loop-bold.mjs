export const name="scribble-loop-bold";
export const id="dl_380f29deed976ebcc87a";
export const url=new URL("../icons/scribble-loop-bold.svg?v=cf3acdd68c2c4e173588d0104d3d49abfd6dc935bc96792646b4c1e872500bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
