export const name="hov";
export const id="dl_bb5fa459486b7763ab53";
export const url=new URL("../icons/hov.svg?v=290bece7ec7985d7d8cf4a81b983363a6ffe9d49b71fbdfc092298dc5284b535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
