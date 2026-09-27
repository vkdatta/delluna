export const name="play-thin";
export const id="dl_8cfbb08d3f604e439b9c";
export const url=new URL("../icons/play-thin.svg?v=bc7da3fc7cdc63f02a59d14fb2bf83c2c9b3c250c26f3129a9ec75ce0c1a63ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
