export const name="lucid_3-panel-top-open";
export const id="dl_7285e1663f214c88b6bb";
export const url=new URL("../icons/lucid_3-panel-top-open.svg?v=d756f916da1c8af8b5b49db64636eea79a692ca8cd62076fc4d670c5f90be3fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
