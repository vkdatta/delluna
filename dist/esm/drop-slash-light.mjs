export const name="drop-slash-light";
export const id="dl_34bc0f7f2d8f44558cba";
export const url=new URL("../icons/drop-slash-light.svg?v=c9bffe83e22746d42d948914d4c254dd0722e3aaccf0f84e12915e2d99bc4132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
