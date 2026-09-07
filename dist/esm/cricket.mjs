export const name="cricket";
export const id="dl_564c806fd0f149768dd2";
export const url=new URL("../icons/cricket.svg?v=059891d040c9c428fc9f410a06da81a89ced5287889918934dd797566dfb9965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
