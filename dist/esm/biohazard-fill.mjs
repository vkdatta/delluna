export const name="biohazard-fill";
export const id="dl_64b339b3f2fd4f6f924b";
export const url=new URL("../icons/biohazard-fill.svg?v=fc041314417b908f9a7effb3b1b24697956e0b3f9e2ad67d499724e986c7b0c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
