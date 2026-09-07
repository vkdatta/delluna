export const name="dots-nine-thin";
export const id="dl_05f45dfa54014dcf8c74";
export const url=new URL("../icons/dots-nine-thin.svg?v=d29b128f84f3332cf350e8680bf0336751f13d13bdb649ed45b191e9abb7f299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
