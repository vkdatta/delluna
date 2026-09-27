export const name="fan-fill";
export const id="dl_8c016d27689d479084e6";
export const url=new URL("../icons/fan-fill.svg?v=5c6d4dd8bb30bfdf7da6d324fb496aa01dea410f47787ce71ae14ba9b6f9c407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
