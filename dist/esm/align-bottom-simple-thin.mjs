export const name="align-bottom-simple-thin";
export const id="dl_d62e5a7afb7a464093e1";
export const url=new URL("../icons/align-bottom-simple-thin.svg?v=8619e50f00ded7b8c34a243c3c5c35fff7a25e8400e938053ccef23263efe004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
