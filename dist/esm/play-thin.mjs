export const name="play-thin";
export const id="dl_8cfbb08d3f604e439b9c";
export const url=new URL("../icons/play-thin.svg?v=a5f780ce535d7fb8b911b211b4e25078f4731d2fc3e491dcb95d6eb906a41f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
