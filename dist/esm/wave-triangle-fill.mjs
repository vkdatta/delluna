export const name="wave-triangle-fill";
export const id="dl_5dbce228541e31825222";
export const url=new URL("../icons/wave-triangle-fill.svg?v=2911a14ae1fca491fadeb41ff84cf42508a0532a4edee5cc0d4e9a6a9aca4e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
