export const name="exclude-square-bold";
export const id="dl_5450fff89e3c4b36828a";
export const url=new URL("../icons/exclude-square-bold.svg?v=87402804895701f60a5155561db68fc39fff3c7b4185427226524a9d6f710e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
