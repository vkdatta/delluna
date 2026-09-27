export const name="lucid_1-club";
export const id="dl_a6e94b4810f4412688d0";
export const url=new URL("../icons/lucid_1-club.svg?v=bfd806cf5f1e14b80296c3cd27aaedc91ed86be2a9d7a79ce7475fc5cd8b2470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
