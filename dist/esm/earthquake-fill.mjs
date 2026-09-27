export const name="earthquake-fill";
export const id="dl_548a23825583c6dec83d";
export const url=new URL("../icons/earthquake-fill.svg?v=dc4abc4677b29d71a1a50c5e8c436dd433ac7c94f5cdd607cab26b48d18ff137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
