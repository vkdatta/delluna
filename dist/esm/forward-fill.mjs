export const name="forward-fill";
export const id="dl_ee21923c597efac3da79";
export const url=new URL("../icons/forward-fill.svg?v=99b6b6111dd088a93f758cf8fef15a720a59853cbc7f468d31e6f1d838b7b018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
