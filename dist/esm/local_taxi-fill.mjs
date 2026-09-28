export const name="local_taxi-fill";
export const id="dl_d53495112d3f6c0cc9e6";
export const url=new URL("../icons/local_taxi-fill.svg?v=44289e1bbf4b09d50f99b07886e7113fe37066a63852e9b47daf807d532136db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
