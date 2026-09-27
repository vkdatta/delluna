export const name="square-stop";
export const id="dl_492f6cdda30d475aa15a";
export const url=new URL("../icons/square-stop.svg?v=ff3bc9f61f01ff4d46ed2e66f4f22289ca0718833d612346ea35b92d3e87faf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
