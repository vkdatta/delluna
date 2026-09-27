export const name="scribble-loop-duotone";
export const id="dl_d4e4b4bae6489b764472";
export const url=new URL("../icons/scribble-loop-duotone.svg?v=cbdeb1312f92b293aff43d3b84689622c5a76f11ec4f9812126c58e128420c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
