export const name="shuffle-simple";
export const id="dl_1c264e05ae248939b801";
export const url=new URL("../icons/shuffle-simple.svg?v=67871a24662e1383a782a2e434d82aeb91f1967107202a95e2879c155acb366b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
