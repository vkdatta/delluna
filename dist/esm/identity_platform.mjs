export const name="identity_platform";
export const id="dl_ae7d7106e4ccb6b6ee51";
export const url=new URL("../icons/identity_platform.svg?v=6c1f7f2bbc89617dcdecff93d69815775516b203deb6d9dd848ea62ae70f6d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
