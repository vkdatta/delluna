export const name="flag-checkered-bold";
export const id="dl_8543374f1c6242f79ac5";
export const url=new URL("../icons/flag-checkered-bold.svg?v=478497ce6869be75abbf55282863beed08db0fc2c15d7d69a622b13ec5f144fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
