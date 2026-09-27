export const name="git-pull-request-light";
export const id="dl_4b442504bab84da69d83";
export const url=new URL("../icons/git-pull-request-light.svg?v=c4c289027e285b5d99bbb54d4a5985f3c2c6c351e9900034cb8141d91814f599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
