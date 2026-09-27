export const name="flag-pennant-light";
export const id="dl_c14b0f3bc6f14593a748";
export const url=new URL("../icons/flag-pennant-light.svg?v=72bf2b371bfb4dd929fa1e4de576688a171697c654bbf1e0f279061e3d1c3cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
