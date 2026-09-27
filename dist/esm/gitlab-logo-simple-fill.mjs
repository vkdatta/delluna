export const name="gitlab-logo-simple-fill";
export const id="dl_18ee357e84bf43248983";
export const url=new URL("../icons/gitlab-logo-simple-fill.svg?v=185abca13b835d0f2782efc30a4eccba4b6b601e4a1a102a05e189aecbae1d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
