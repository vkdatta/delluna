export const name="read-cv-logo-light";
export const id="dl_378dae56d5ad4bfa85fc";
export const url=new URL("../icons/read-cv-logo-light.svg?v=ddfec92a2219a951b362085c31bf9dc8858fc522fe599d20c082852a8c93879d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
