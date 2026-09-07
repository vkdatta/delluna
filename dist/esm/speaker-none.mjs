export const name="speaker-none";
export const id="dl_31a8b752440e45d39f33";
export const url=new URL("../icons/S/speaker-none.svg?v=628a7884e1cd0b9369fcdfc0d199510bf8bd15cb00919c303dbeeac0663515e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
