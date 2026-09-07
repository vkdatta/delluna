export const name="seal-percent-thin";
export const id="dl_c56e74d1ad134e55bf65";
export const url=new URL("../icons/S/seal-percent-thin.svg?v=957552f3c3588053330a33f5c7bf512ae820e8576421ebfacfd7977c7dd75d66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
