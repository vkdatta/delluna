export const name="gitlab-logo-simple-light";
export const id="dl_70e8a5105a1d4f23834a";
export const url=new URL("../icons/gitlab-logo-simple-light.svg?v=8590881900563742e9b080627cc53e9b8292ea278edadfd9ca2e6172165e1d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
