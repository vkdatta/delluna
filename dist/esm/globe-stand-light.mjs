export const name="globe-stand-light";
export const id="dl_94e859207ccf4746a795";
export const url=new URL("../icons/globe-stand-light.svg?v=1c1a1f4bba5cf5fa09a3732a3ff13b5abc6f6bf17b718519ffacdf26954b1fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
