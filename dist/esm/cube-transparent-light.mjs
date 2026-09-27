export const name="cube-transparent-light";
export const id="dl_c2b62a14937d43fab2fe";
export const url=new URL("../icons/cube-transparent-light.svg?v=0804e459b23eb4ea77b606d23d03591091d41ee0a5cf0c28adddb6538d983dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
