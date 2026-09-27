export const name="memory-fill";
export const id="dl_b5ce3876d1c6dab49414";
export const url=new URL("../icons/memory-fill.svg?v=9db740e6d70324954b5f6331d290bfc4954f3534eed66d1306a218f173226075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
