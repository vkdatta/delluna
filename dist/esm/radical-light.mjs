export const name="radical-light";
export const id="dl_8d6cee84f6494c9ebe51";
export const url=new URL("../icons/radical-light.svg?v=84515fb60f38a7e1d8fa26f39ae1147c3dd1cb27249f7b88ae1a9def83e2c5b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
