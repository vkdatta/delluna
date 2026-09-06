export const name="matrix-logo-fill";
export const id="dl_8dd149b46761457cb281";
export const url=new URL("../icons/matrix-logo-fill.svg?v=80d513e02d463be4eb01173ba74213cb17d1322806023b5a0acf4f8bfd5ace61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
