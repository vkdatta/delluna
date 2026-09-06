export const name="paper-plane-bold";
export const id="dl_f2fc7b1a72d044cea43b";
export const url=new URL("../icons/paper-plane-bold.svg?v=060acef73b975143e49de97a9cf0331f93d16c8a16fc7032353782d6e2de98ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
