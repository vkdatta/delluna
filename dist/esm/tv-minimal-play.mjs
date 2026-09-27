export const name="tv-minimal-play";
export const id="dl_93d7dafebd26401496aa";
export const url=new URL("../icons/tv-minimal-play.svg?v=6b4a368e71e9aab178a074c3f8e37e58375f996a69591dfc96602a2e886df028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
