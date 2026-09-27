export const name="lucid_1-cassette-tape";
export const id="dl_48ccd81975a34b04afea";
export const url=new URL("../icons/lucid_1-cassette-tape.svg?v=244284a600c9a3c31a9e351e300ef6068c2203a3733aec10e37477342b0d8f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
