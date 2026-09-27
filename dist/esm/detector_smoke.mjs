export const name="detector_smoke";
export const id="dl_1c4b77c97efd59993c72";
export const url=new URL("../icons/detector_smoke.svg?v=307bc0c28166a0e8ef7063d0bcf698d7e7ac28e0bd9a14c9983bb6abb56d3cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
