export const name="background_dot_large-fill";
export const id="dl_1ead91ca27bf43c0aecc";
export const url=new URL("../icons/background_dot_large-fill.svg?v=54318257e4b416960b1223a7f3d67dfedc3c6715ba7c5545de5225b433bdc2a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
