export const name="tangent";
export const id="dl_91f588d0479c42f289b7";
export const url=new URL("../icons/tangent.svg?v=24388ba11a6591cd45198331163644612b71250c98f59d3c19f0aabc2c83371a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
