export const name="toggle-right-fill";
export const id="dl_b2887294be75af03d772";
export const url=new URL("../icons/toggle-right-fill.svg?v=fe0a12ad2bceb9d12edd3dc8c71d5b1a81d1aaeccf961941c8abb6e4bc2fdbb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
