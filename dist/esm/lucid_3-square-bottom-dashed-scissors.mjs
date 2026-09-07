export const name="lucid_3-square-bottom-dashed-scissors";
export const id="dl_4d58fcc0faea4eddb4f7";
export const url=new URL("../icons/lucid_3-square-bottom-dashed-scissors.svg?v=00e971c1283d6969ae3f8b0cd562f8da8a80ee918fcbafbbbe0ee11bd47ebdeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
