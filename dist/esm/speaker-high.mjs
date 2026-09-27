export const name="speaker-high";
export const id="dl_a38ee3e2ca7c57e8b780";
export const url=new URL("../icons/speaker-high.svg?v=835e2c9a6ec18bb32e4eb931ab8685e5ca3f1e44ac73e5c91a3029afe9195fd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
