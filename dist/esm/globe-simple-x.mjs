export const name="globe-simple-x";
export const id="dl_561e1b8ae7174a20bad7";
export const url=new URL("../icons/globe-simple-x.svg?v=e27e99ca869064575c79231dec995bb9a21cda8227281b1412e3ad455c8fcd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
