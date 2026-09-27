export const name="nest_farsight_cool-fill";
export const id="dl_98b33f116c63a180ff6a";
export const url=new URL("../icons/nest_farsight_cool-fill.svg?v=ad0f99442865bc02e168465b77cfb8f077bce9d67ce62d7fae416840ed5839de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
