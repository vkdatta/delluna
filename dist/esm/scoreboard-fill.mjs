export const name="scoreboard-fill";
export const id="dl_0413ade511fa4855a6c9";
export const url=new URL("../icons/scoreboard-fill.svg?v=03ee1d61cdafc5701bf9e36633849007aaecbc0f96a1b272ed18a02e741d83d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
