export const name="crop-fill";
export const id="dl_6a7953cc450f46e8beb8";
export const url=new URL("../icons/crop-fill.svg?v=40fe628a321f48377e5aebd41da80b5d3ce8318fb1d7cdfda30afe86c98716c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
