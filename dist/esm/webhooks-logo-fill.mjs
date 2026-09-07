export const name="webhooks-logo-fill";
export const id="dl_fb255d59de7546209497";
export const url=new URL("../icons/W/webhooks-logo-fill.svg?v=a7daa336bc87de20283337636ed6f270e342ef96fdeb00bd41ae6a522928dc9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
