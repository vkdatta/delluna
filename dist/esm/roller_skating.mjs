export const name="roller_skating";
export const id="dl_23beeedcc0e240c7807b";
export const url=new URL("../icons/R/roller_skating.svg?v=0aa280021fb44bc5bd1fe5778a2bbe529b0d3455b399d603ad095ca7e799534e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
