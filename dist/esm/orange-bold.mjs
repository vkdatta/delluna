export const name="orange-bold";
export const id="dl_f9e5a4dba8b8480194f8";
export const url=new URL("../icons/orange-bold.svg?v=28958b4f896d3c5b6b72ad5156b48ce2749930acd1d868ba4f38eba50b769c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
