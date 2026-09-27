export const name="hair-dryer-bold";
export const id="dl_5279904a13ca4034b508";
export const url=new URL("../icons/hair-dryer-bold.svg?v=f812a01f83d9a06e5de210e4815bd34420e3b48181b1b61e6221303fa0817c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
