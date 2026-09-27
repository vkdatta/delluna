export const name="gitlab-logo-simple-light";
export const id="dl_70e8a5105a1d4f23834a";
export const url=new URL("../icons/gitlab-logo-simple-light.svg?v=1a9afa71af728dbe2d6f8f1632fd4cf6d35d077c2188a559bfc84d55de11f2f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
