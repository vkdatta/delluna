export const name="dictionary-fill";
export const id="dl_9bb53f00bafb4bf59234";
export const url=new URL("../icons/dictionary-fill.svg?v=16cfe10b72bd4231db02fe16168308b7b4eedae2844c8fd1589f5cfcf73331fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
