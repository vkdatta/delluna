export const name="globe-hemisphere-east-thin";
export const id="dl_3f0517d76c9845dcac80";
export const url=new URL("../icons/globe-hemisphere-east-thin.svg?v=1974b8d67c5155e7462aae091fec2209ed4b268434a27ef85dfd05932d73ce0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
