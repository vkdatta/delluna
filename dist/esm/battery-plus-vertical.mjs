export const name="battery-plus-vertical";
export const id="dl_0420e202a310470cb765";
export const url=new URL("../icons/battery-plus-vertical.svg?v=72fbef3112f83e81a63d15278ee52dd8c5b0e13b07f8e1df49cde5bafd7a7c9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
