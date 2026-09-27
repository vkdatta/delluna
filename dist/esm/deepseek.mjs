export const name="deepseek";
export const id="dl_40c9411c2698756021b8";
export const url=new URL("../icons/deepseek.svg?v=2c58e4ea88c42e999150d5d621874b13c6875f8afa3228cbb05ee49b86dc4d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
