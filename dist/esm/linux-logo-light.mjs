export const name="linux-logo-light";
export const id="dl_2febc6e721794d5a8c8d";
export const url=new URL("../icons/linux-logo-light.svg?v=73cbf195834831ad10807faba776167029361907023e41e2779fb44f9f95fa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
