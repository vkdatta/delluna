export const name="tv-minimal-play";
export const id="dl_93d7dafebd26401496aa";
export const url=new URL("../icons/tv-minimal-play.svg?v=18b5c996f5de0286facebbc522a3a1b537d0bef27b240515cd4f20c749575496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
