export const name="tiktok-logo-bold";
export const id="dl_4725656b7dfa0e39ba60";
export const url=new URL("../icons/tiktok-logo-bold.svg?v=699c66c443583aabad2e50b829005286b41e4339942ddfc30d71d03a77b4973c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
