export const name="film-script-thin";
export const id="dl_86c852ec3a524391a7ee";
export const url=new URL("../icons/film-script-thin.svg?v=c5e835fb038b2a7d5eb27e40195f918f315af565f33f900ff0ff084c9566a0b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
