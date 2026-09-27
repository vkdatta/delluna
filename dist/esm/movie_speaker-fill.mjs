export const name="movie_speaker-fill";
export const id="dl_5735332770a302f1d999";
export const url=new URL("../icons/movie_speaker-fill.svg?v=701866be338db3077416a3e682660b5c285ea233def0e076037cc1162772fd7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
