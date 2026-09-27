export const name="metro-fill";
export const id="dl_cac4a40e65f0d43f84e2";
export const url=new URL("../icons/metro-fill.svg?v=f2ad4aca26a4634e2189980da7a24af4fb77707832fb418600d056bdb6e5dbc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
