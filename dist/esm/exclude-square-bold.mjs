export const name="exclude-square-bold";
export const id="dl_5450fff89e3c4b36828a";
export const url=new URL("../icons/exclude-square-bold.svg?v=9b2725802beb8b233a7a85c13e9a9a695261564cedfeacff1b9091881a7a1b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
