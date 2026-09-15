export const name="ballot-fill";
export const id="dl_dab77c7af78e47baa8f3";
export const url=new URL("../icons/B/ballot-fill.svg?v=8e1dce592b8d91eb25a486c165ece8cf3209c4c474cdab8bb2c3ef49dd3236c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
