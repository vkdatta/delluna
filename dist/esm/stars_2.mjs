export const name="stars_2";
export const id="dl_76f7cdb68a98591cc320";
export const url=new URL("../icons/stars_2.svg?v=80edbe61c0c99e6eeea22188a5c19ba4a4286c0d9c66eed5ad759c2bb2b75371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
