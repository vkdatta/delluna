export const name="app_registration-fill";
export const id="dl_8dbb4209aaceee2b4125";
export const url=new URL("../icons/app_registration-fill.svg?v=b9306e6997d7d1b93eed78a9c3b470813325d17461e6d89174c5bbcb8bfa426e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
