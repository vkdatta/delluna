export const name="brandy";
export const id="dl_d1b5b336d9584c2289d2";
export const url=new URL("../icons/brandy.svg?v=70670486c50862e6d11b953baeae343c764058b67cc38faba7cde9f21a45dfa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
