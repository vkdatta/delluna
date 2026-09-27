export const name="building-office-bold";
export const id="dl_50eda555309d48218a47";
export const url=new URL("../icons/building-office-bold.svg?v=bd251c36d488e1a439d3f5493a44d0c2587e12f6333c3858479855d7fa00509c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
