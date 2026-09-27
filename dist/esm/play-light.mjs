export const name="play-light";
export const id="dl_c95de29339eb42a7af28";
export const url=new URL("../icons/play-light.svg?v=c6327c9941bf52a71021f2b03d268da5e72317223c8fc209a154e3c6f509eaa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
