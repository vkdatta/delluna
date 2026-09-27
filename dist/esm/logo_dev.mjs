export const name="logo_dev";
export const id="dl_7136a16e7757945466ec";
export const url=new URL("../icons/logo_dev.svg?v=6ec58dfe6dbb72725cfdabf284a2514b6d099aee25b93c6233b1ad22c36bfb99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
