export const name="step-forward";
export const id="dl_d11ce184e3a848dfb879";
export const url=new URL("../icons/step-forward.svg?v=ed2616d3831f5bce162bce18bde9fb98a813ba1641edae2aa7cebcf1b6d17c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
