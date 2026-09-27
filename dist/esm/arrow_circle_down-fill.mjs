export const name="arrow_circle_down-fill";
export const id="dl_5b422a75f5175b3c5700";
export const url=new URL("../icons/arrow_circle_down-fill.svg?v=149a617eb0992d37404e7a2615eb3b401bc91424cc9bdf0c5e2a25eb8a4b11d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
