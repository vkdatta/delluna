export const name="orange-fill";
export const id="dl_505d2ad458ac4c8bb5a8";
export const url=new URL("../icons/orange-fill.svg?v=4cef6d3b44b0ba08ff8e567454c55d198b37a930c8c08eb924e3e4413ebe56de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
