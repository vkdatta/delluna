export const name="clock_loader_80-fill";
export const id="dl_a065e6e453ef0ec81c52";
export const url=new URL("../icons/clock_loader_80-fill.svg?v=f8b20ec861f2c459ae2f62c7fd336f233e6a9cf8a36eb23d2aa4af8cd065d783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
