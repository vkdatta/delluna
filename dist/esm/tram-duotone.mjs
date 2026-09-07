export const name="tram-duotone";
export const id="dl_c1f4a0fe86e84ecf8f04";
export const url=new URL("../icons/T/tram-duotone.svg?v=b8379a80b47ffdbf212aa5e1bc213f36a05898d708d9b5aa5dc68ad0d5e9ee39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
