export const name="arrow-elbow-left-down-light";
export const id="dl_61e535dcf0824920af5b";
export const url=new URL("../icons/arrow-elbow-left-down-light.svg?v=31e08569e876a830b07783b7e46d95e4e1fb50c74bb7ed6c0e3b7a705b566d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
