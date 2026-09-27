export const name="clock_loader_90-fill";
export const id="dl_7c6c67368c1916044b90";
export const url=new URL("../icons/clock_loader_90-fill.svg?v=75e9da776b7ee83eb879e0e5005db269563c5fc5cba4a635dd8d18b5505823d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
