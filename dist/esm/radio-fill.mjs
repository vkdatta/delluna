export const name="radio-fill";
export const id="dl_d549ba0a754f4296af89";
export const url=new URL("../icons/radio-fill.svg?v=92ddc7988a324ec545d782e06bb50238ff85b65743a928e4efaeadee76188a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
