export const name="police-car";
export const id="dl_7494d3e6db1742b3ae9c";
export const url=new URL("../icons/police-car.svg?v=c0dc56802b6e0e0d3728d651875c0fbf6b95151a0238487fc87e7788f4d95405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
