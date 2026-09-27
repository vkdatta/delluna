export const name="github-logo-bold";
export const id="dl_387eb25d96c24bef98c5";
export const url=new URL("../icons/github-logo-bold.svg?v=ce1754ee12661a1364a54925c9d26e3ee8365de990c7b913f4b4187624e9489a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
