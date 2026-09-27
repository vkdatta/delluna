export const name="adjust-fill";
export const id="dl_3e9b5afb5fb6874712bc";
export const url=new URL("../icons/adjust-fill.svg?v=fd1eb1e22f25e78e9384e5c3d08aab47203536feca0e6d85f9a36bcd2e1bf1c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
