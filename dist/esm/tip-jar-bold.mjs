export const name="tip-jar-bold";
export const id="dl_593a64b628aed983379c";
export const url=new URL("../icons/tip-jar-bold.svg?v=13442d837294d9aa19ff76566055b409a7cefd316ab58d5eb3eea5a3b4e77891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
