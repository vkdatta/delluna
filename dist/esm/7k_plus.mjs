export const name="7k_plus";
export const id="dl_7c46b6373f290e371e15";
export const url=new URL("../icons/7k_plus.svg?v=ee12d21e64a706c79004dbbac2fbbbbfd28c2fbbfc693ad6c121cae5ab11e868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
