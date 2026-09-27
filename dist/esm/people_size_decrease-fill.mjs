export const name="people_size_decrease-fill";
export const id="dl_de6dd555d4136a3fc674";
export const url=new URL("../icons/people_size_decrease-fill.svg?v=d02498be4a0ae7fd6f64592af30fa46f85336e09c99c3af3f6120c10e67e8879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
