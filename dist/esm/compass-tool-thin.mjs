export const name="compass-tool-thin";
export const id="dl_173cac8b07c34aa0a0e8";
export const url=new URL("../icons/compass-tool-thin.svg?v=c0f64bc2058d3b451ff48d261f716716d6a7b8b27bb2c5a8eb9cf735d6986806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
