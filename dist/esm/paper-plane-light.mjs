export const name="paper-plane-light";
export const id="dl_971d0203c42c43b5895c";
export const url=new URL("../icons/paper-plane-light.svg?v=7c4c66156fd16224195f36657254335be0d17f0b23fe10bc955a9af33f3a919a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
