export const name="casino";
export const id="dl_61c5bfd264784cc0846a";
export const url=new URL("../icons/casino.svg?v=22626db853be1ce6ccd4d3db81da0252e087025dc79637ea17160e8eb8e08b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
