export const name="angular-logo-light";
export const id="dl_3aaf621eafd348c8b3b4";
export const url=new URL("../icons/angular-logo-light.svg?v=f5d74a1909f21b4ddc2b53228417c5931875a2780c2bf99585d991007578d962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
