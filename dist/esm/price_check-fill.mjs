export const name="price_check-fill";
export const id="dl_76d90b0d93f871446e22";
export const url=new URL("../icons/price_check-fill.svg?v=749acffcf9b3eb36b406228a815820bc3c8e31bb46f2a8a998b7e058b239c2e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
