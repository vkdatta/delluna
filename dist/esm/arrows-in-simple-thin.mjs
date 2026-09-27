export const name="arrows-in-simple-thin";
export const id="dl_ae96e0778c6e4864bb08";
export const url=new URL("../icons/arrows-in-simple-thin.svg?v=075ba0f080ee981f08cd8ae23b5bcd5f182bbcaebbc0f48d1a39e7601022ae0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
