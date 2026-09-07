export const name="clock-duotone";
export const id="dl_47f64d54d85240c5bd8e";
export const url=new URL("../icons/clock-duotone.svg?v=2f54d3367b48e1c7579b3fb33963240ee4060bd55ddd4e3c39cd59f840499539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
