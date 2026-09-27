export const name="redo";
export const id="dl_36c32977254b00511686";
export const url=new URL("../icons/redo.svg?v=9268bcea4499f6d67f301fef5fe113438fd89487a5f29ee464e5ab7ac40d3a0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
