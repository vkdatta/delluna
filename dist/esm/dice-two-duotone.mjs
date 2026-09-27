export const name="dice-two-duotone";
export const id="dl_b06d0e9353764791b915";
export const url=new URL("../icons/dice-two-duotone.svg?v=b123589042df610f280f78788c4c3ef5b16fbb1719aacc72be2ca74ce118614e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
