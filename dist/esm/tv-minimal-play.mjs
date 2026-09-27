export const name="tv-minimal-play";
export const id="dl_93d7dafebd26401496aa";
export const url=new URL("../icons/tv-minimal-play.svg?v=31b279afd7ec5520d09b917c9b938cbfe359941dbed8218e3cef7b4e7a26755b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
