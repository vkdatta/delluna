export const name="hourglass-simple-high-bold";
export const id="dl_8733203c18df4397baf7";
export const url=new URL("../icons/hourglass-simple-high-bold.svg?v=e97b50defcbf7eb4d87c588bf34beba0a4f2ea51c787560673cec23a94afadf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
