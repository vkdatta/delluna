export const name="crosshair-simple-fill";
export const id="dl_6c5da3710c184d37907a";
export const url=new URL("../icons/crosshair-simple-fill.svg?v=fdd1776431140638e13ad027e00db9747dee50489e89ed8e35d63a0d768218ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
