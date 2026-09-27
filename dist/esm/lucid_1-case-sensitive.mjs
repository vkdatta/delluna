export const name="lucid_1-case-sensitive";
export const id="dl_c0e729b923fd49caa0cb";
export const url=new URL("../icons/lucid_1-case-sensitive.svg?v=8777e8f9c2ede31374235ef6e07bd121b21ad8a8ac15eb565eb41c6ec6eaf2e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
