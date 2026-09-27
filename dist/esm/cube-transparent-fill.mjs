export const name="cube-transparent-fill";
export const id="dl_2a416be7bdd249428491";
export const url=new URL("../icons/cube-transparent-fill.svg?v=b6073a55bdc1d94e7bde24b162c7eab43eb56802b942f48fac2c91173a4374c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
