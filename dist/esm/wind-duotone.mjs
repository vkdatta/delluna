export const name="wind-duotone";
export const id="dl_1b5d972a13be465c80be";
export const url=new URL("../icons/W/wind-duotone.svg?v=b980894921d4062d3806f11fb10fd3672c9dc7367c39bdccc71e8f74908fd217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
