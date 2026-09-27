export const name="arrow-elbow-down-left-bold";
export const id="dl_ab5c2e4d8a6248fcb2c2";
export const url=new URL("../icons/arrow-elbow-down-left-bold.svg?v=bdefda4ac005f9c90689fbcdb250856c8fdac44aac9ac96861b24bad2c63c206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
