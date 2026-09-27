export const name="tire-bold";
export const id="dl_650a12846acd0f6e5eec";
export const url=new URL("../icons/tire-bold.svg?v=d626e4408f46fbc2d3de1902270de60ca0263212622b7acc999577efd24808f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
