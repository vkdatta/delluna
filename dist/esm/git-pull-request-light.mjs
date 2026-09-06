export const name="git-pull-request-light";
export const id="dl_4b442504bab84da69d83";
export const url=new URL("../icons/git-pull-request-light.svg?v=c6039fff2da6b7a4246b3e442153174b857f387e8f37a36b73eae3fb6bc34448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
