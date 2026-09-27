export const name="film-strip-light";
export const id="dl_490c864776304a40a1b4";
export const url=new URL("../icons/film-strip-light.svg?v=c1efd9a84e1078718cec81733a84f0f46ce1951b64ec5afe4ec9139104312232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
