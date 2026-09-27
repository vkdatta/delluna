export const name="lucid_1-clock-5";
export const id="dl_e542410c6cbf467b873e";
export const url=new URL("../icons/lucid_1-clock-5.svg?v=bb1a37c4701eeb619d5fabfef800faa7ab8899da3289829f08313ef7a034e06e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
