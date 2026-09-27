export const name="selection-inverse-light";
export const id="dl_37c52e987c5d9dab040f";
export const url=new URL("../icons/selection-inverse-light.svg?v=310ba94c2418c351bd2cb60226cf6792a8764477dd1a3fea8bb2a409f340dde0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
