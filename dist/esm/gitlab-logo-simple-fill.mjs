export const name="gitlab-logo-simple-fill";
export const id="dl_18ee357e84bf43248983";
export const url=new URL("../icons/gitlab-logo-simple-fill.svg?v=3410353184bd8a538748ade467e5015bf15aa4049f5a9bb87287bdbb324a334e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
