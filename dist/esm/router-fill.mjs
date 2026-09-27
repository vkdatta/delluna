export const name="router-fill";
export const id="dl_910e7de64614b6baa733";
export const url=new URL("../icons/router-fill.svg?v=56dfa2f43d2a3e3ba63d29875efe4d3c7e131fdf66adbb4a8d0b4877afec8c9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
