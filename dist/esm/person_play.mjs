export const name="person_play";
export const id="dl_c6638e30750547c7828f";
export const url=new URL("../icons/P/person_play.svg?v=a99a72e2db29b4ffd9090f72fb8e2301f54da7a9ba969ae526dfe4d86d44202a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
