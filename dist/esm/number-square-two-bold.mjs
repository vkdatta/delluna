export const name="number-square-two-bold";
export const id="dl_92d8ca1d09e94f96bb1b";
export const url=new URL("../icons/number-square-two-bold.svg?v=bc654c4394f666186e0622d61d74efae00459f518778e90b443ee5a40ba3a8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
