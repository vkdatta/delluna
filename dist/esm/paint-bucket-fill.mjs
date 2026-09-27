export const name="paint-bucket-fill";
export const id="dl_47839f8644084aa3b382";
export const url=new URL("../icons/paint-bucket-fill.svg?v=86703c117422c4aff881493238abdeb30652419f9c4ce105bf2d8f1d16ebb9da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
