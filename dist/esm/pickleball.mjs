export const name="pickleball";
export const id="dl_49ac7fa646e61ea05950";
export const url=new URL("../icons/pickleball.svg?v=daccbd6cb079a2297fa91c7a616e9b71f38d3ec4ab83079be723efd62937712b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
