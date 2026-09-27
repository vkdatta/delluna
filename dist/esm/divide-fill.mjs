export const name="divide-fill";
export const id="dl_486fc7831a7141a696c2";
export const url=new URL("../icons/divide-fill.svg?v=817223d3c21c0475be826fb4af6e48d11fbf2c79a4f6e5542a42f7c812450596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
