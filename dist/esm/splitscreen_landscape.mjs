export const name="splitscreen_landscape";
export const id="dl_f3eeaab39af07c9f3883";
export const url=new URL("../icons/splitscreen_landscape.svg?v=663fb4105e64f1f0f3467bc12ff939b66872e5935c78c4f1bfc351fe819d1be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
