export const name="globe-hemisphere-west-fill";
export const id="dl_57f8da70916b42e68446";
export const url=new URL("../icons/globe-hemisphere-west-fill.svg?v=3329de58d10a565ec3215565e29bfd03a7c5e00ce0c3340d7fa0abb050d8cdab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
