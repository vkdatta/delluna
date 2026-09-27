export const name="gitlab-logo-fill";
export const id="dl_20505d95c5ee46f78339";
export const url=new URL("../icons/gitlab-logo-fill.svg?v=46a1ac89bc5beaf2c98ad40e5de1bddde1b6951341432a2017a575fb7af5c5f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
