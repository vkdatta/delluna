export const name="tab_recent";
export const id="dl_3a30b59ff7da98496aeb";
export const url=new URL("../icons/tab_recent.svg?v=3ccbb1a688c22bc32630cfeeaee9847e478eb8ce97577e779c12106b5422ec2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
