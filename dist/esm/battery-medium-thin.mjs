export const name="battery-medium-thin";
export const id="dl_1218d3e80c0a4a5cb498";
export const url=new URL("../icons/battery-medium-thin.svg?v=34a50c7c7bb6ab37ba33e80093e5c91917265f61c3ada18f4a69e45db192f800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
