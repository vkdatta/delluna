export const name="play-light";
export const id="dl_c95de29339eb42a7af28";
export const url=new URL("../icons/play-light.svg?v=ecf763895f8f4f3a996fdeb3b3c347929c174c77f607efe13a6e8a47a973564e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
