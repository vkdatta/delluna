export const name="ranking-duotone";
export const id="dl_5a2d5330d6eb4876a8f7";
export const url=new URL("../icons/ranking-duotone.svg?v=584103ab6443c176b81b7b9a8c1adeb317040ab2eef2e012c1d1bc43ea0e9ebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
