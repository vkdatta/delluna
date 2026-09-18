export const name="health_and_safety-fill";
export const id="dl_c4998f0706f34344b5d9";
export const url=new URL("../icons/health_and_safety-fill.svg?v=6023b565cbca4a6260e807cfbfd7185a821ea23d506cde9e93fd61ef081eeacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
