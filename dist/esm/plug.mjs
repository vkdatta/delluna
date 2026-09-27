export const name="plug";
export const id="dl_0536a540d30a48cb8400";
export const url=new URL("../icons/plug.svg?v=e95a1892ea5e2a69bcf4eab1319239079aadad058930501e89c54d73bf842fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
