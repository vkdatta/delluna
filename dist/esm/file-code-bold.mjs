export const name="file-code-bold";
export const id="dl_b6e699df6a094c8f953c";
export const url=new URL("../icons/file-code-bold.svg?v=e95938ef090fc1cf8dc9e60b656c8f0026d5975100f01e38893f40f0e96077af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
