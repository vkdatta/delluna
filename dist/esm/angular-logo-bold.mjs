export const name="angular-logo-bold";
export const id="dl_2b87b4d0130b468bb416";
export const url=new URL("../icons/angular-logo-bold.svg?v=c3ae956f79d128d485449a32d79a4b2d05a1108c76d4d27dc85525ee168e1a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
