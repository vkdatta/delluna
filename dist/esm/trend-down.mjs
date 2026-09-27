export const name="trend-down";
export const id="dl_160df5ce8b9daaa764ba";
export const url=new URL("../icons/trend-down.svg?v=d9e6d6869e9b966d9f35a9e550814e8eeea693a3d965c02eb065be54e9c7b638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
