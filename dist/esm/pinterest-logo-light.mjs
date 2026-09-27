export const name="pinterest-logo-light";
export const id="dl_19f650e4307a40d0a2ef";
export const url=new URL("../icons/pinterest-logo-light.svg?v=e2946038845926763ca7c9b70e1d30f17f9ed89f916395378ff2add28e604342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
