export const name="umbrella-off";
export const id="dl_ee7352d287214f58a1d1";
export const url=new URL("../icons/umbrella-off.svg?v=8f1959bde2ef61ff1f536f8d244e52ec91cb38ffedbb1d0a139deff9c2f62132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
