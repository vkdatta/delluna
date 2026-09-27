export const name="select-fill";
export const id="dl_af82650d415a2984af01";
export const url=new URL("../icons/select-fill.svg?v=fc5cceb1bc111779a07d1a95d5210d8a730b20c7fc382ccde7837439f2de3dbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
