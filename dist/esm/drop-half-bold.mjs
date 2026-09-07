export const name="drop-half-bold";
export const id="dl_ee67f395d75e4342b6d7";
export const url=new URL("../icons/drop-half-bold.svg?v=b755f3c8526e46f9f6770f818b912c05874d6723a6306b961e157c145866673f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
