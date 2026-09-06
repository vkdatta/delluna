export const name="file-jsx-thin";
export const id="dl_4a19ddf1fb554a308fee";
export const url=new URL("../icons/file-jsx-thin.svg?v=bc45e23877b7eb57a824ecb9c13892cac5646e69cf63156cf09e416ef9dd92c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
