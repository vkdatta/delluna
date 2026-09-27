export const name="resize-light";
export const id="dl_129d65546c8a4ed5af19";
export const url=new URL("../icons/resize-light.svg?v=4b5f441e66f910cb3ab97378c674222a23c1fd0bdb9fce98cd0c7d8f411f4428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
