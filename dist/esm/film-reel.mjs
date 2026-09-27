export const name="film-reel";
export const id="dl_7cb2fdd715d340b28e1e";
export const url=new URL("../icons/film-reel.svg?v=f466ef5eae7395937ec3e4e9340657a55553e3712eb0b7c1affd1c57bf99f3bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
