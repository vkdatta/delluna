export const name="screwdriver-bold";
export const id="dl_0a087b2a4cc442d4b974";
export const url=new URL("../icons/S/screwdriver-bold.svg?v=04965fdbff9f9e3ec1865e8ab56f37b3587a566a6e8e1c0116d7f1d23dce0dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
