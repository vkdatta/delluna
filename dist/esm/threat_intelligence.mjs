export const name="threat_intelligence";
export const id="dl_58cd0747a6d668e601bc";
export const url=new URL("../icons/threat_intelligence.svg?v=fe95ef1770cdd69d629c57c82f5c018376513d0441cddb464ad447be92ca7ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
