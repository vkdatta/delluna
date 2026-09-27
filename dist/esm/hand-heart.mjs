export const name="hand-heart";
export const id="dl_f90552daef4146ad86d0";
export const url=new URL("../icons/hand-heart.svg?v=a98bd3970e4cd0f5e46e5743e3ab274285435b6fcac81486c4d205cfe6cc0354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
