export const name="desktop_access_disabled";
export const id="dl_a5e2e196f284d4655837";
export const url=new URL("../icons/desktop_access_disabled.svg?v=76c935e6dfd16c5bca2547d15e2b3aebd5951021c34ba62e33cb0c4ecb72f2b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
