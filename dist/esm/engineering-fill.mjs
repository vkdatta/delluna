export const name="engineering-fill";
export const id="dl_6a8dcb24977f93a5bb6d";
export const url=new URL("../icons/engineering-fill.svg?v=3b921664188cda5fc5b0cace88fcc44cc769d9b8d6e07ef480f29396745711f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
