export const name="not-superset-of-bold";
export const id="dl_9bafb87237a643018840";
export const url=new URL("../icons/not-superset-of-bold.svg?v=36eb0ff79db381b0bd54c14f63598f0ad45aa745d1ea9a892f19243d297e1b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
