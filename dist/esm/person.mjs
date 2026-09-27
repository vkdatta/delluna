export const name="person";
export const id="dl_3ff0a382be79998a592c";
export const url=new URL("../icons/person.svg?v=0338e3695e674058aaa9a7d34709ab51416dbbd4c225dd1ac51d405ba1943248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
