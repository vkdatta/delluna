export const name="soccer-ball-thin";
export const id="dl_52ba9e91516ebdc40fe8";
export const url=new URL("../icons/soccer-ball-thin.svg?v=84c708d60cb56df2914b23215bbdaa338284b79df22ce3d57a09bce1dc99b9ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
