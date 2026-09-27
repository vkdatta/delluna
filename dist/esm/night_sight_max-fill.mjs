export const name="night_sight_max-fill";
export const id="dl_81d5c427d5a3ade471d3";
export const url=new URL("../icons/night_sight_max-fill.svg?v=ed7d640122fb10d8162b0dc6996110a993ba6bbcb28bd5ede593a567c5684a9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
