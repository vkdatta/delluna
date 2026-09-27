export const name="arrow-bend-up-left";
export const id="dl_0cfdef119b67401b9671";
export const url=new URL("../icons/arrow-bend-up-left.svg?v=8da53a145dd9750d2e9d32fc4846cac901f98b74d7dcae8234f6911f3e9ea860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
