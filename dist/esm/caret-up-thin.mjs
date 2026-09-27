export const name="caret-up-thin";
export const id="dl_4a9ed750b90444408603";
export const url=new URL("../icons/caret-up-thin.svg?v=7019737d5a53ab4352838659ba15bb5e8782c30e5897999bf494a16c5d0c8e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
