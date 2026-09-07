export const name="translate";
export const id="dl_1d2bc218e5ab45fcb207";
export const url=new URL("../icons/T/translate.svg?v=1e49dc31f3a172c9c7c67361511ee5314598b3f5b32788219325f589487f76c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
