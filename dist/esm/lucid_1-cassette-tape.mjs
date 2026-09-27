export const name="lucid_1-cassette-tape";
export const id="dl_48ccd81975a34b04afea";
export const url=new URL("../icons/lucid_1-cassette-tape.svg?v=53100d1822ae8068b0c70b0e7a490dee1891a7e174e22c725ab7d05716707cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
