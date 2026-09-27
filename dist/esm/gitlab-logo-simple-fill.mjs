export const name="gitlab-logo-simple-fill";
export const id="dl_18ee357e84bf43248983";
export const url=new URL("../icons/gitlab-logo-simple-fill.svg?v=7a8829968febb076184bdda6d2aaa047c7d88b5f4896d8f4f37cb415055d26cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
