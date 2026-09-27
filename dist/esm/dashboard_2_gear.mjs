export const name="dashboard_2_gear";
export const id="dl_7db15011f244f33a46d2";
export const url=new URL("../icons/dashboard_2_gear.svg?v=91a897c776dddcc1a779a99c9c169b03ccfe7fc63908494c5c66cf154a454dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
