export const name="airport_shuttle";
export const id="dl_4b25c5c188904dfc9416";
export const url=new URL("../icons/A/airport_shuttle.svg?v=3437adbd29aad0a880e943cf203b31a77fc89874bb6694822a51a023e940e603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
