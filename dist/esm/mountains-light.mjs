export const name="mountains-light";
export const id="dl_47d743ce875548e19eb7";
export const url=new URL("../icons/mountains-light.svg?v=543f0b5e964942a0a023dd276b5eeab78dd740901e88fa2d1b0795c75e79201c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
