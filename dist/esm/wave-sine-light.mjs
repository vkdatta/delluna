export const name="wave-sine-light";
export const id="dl_2786ade6635638f1bc57";
export const url=new URL("../icons/wave-sine-light.svg?v=5457eec251aaf1b74fa7f786cc5c3b57c5a1e9622c9b265252836fa2d925684e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
