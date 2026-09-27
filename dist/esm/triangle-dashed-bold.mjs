export const name="triangle-dashed-bold";
export const id="dl_9318fe2f2d3e901dac5a";
export const url=new URL("../icons/triangle-dashed-bold.svg?v=689f49fad3a9b672ed1eab4d459f8e6a4fad1fd3638fdefe5844dd75791fa643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
