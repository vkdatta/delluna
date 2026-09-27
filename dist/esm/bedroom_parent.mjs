export const name="bedroom_parent";
export const id="dl_3884c6d2a18b7bce9fd6";
export const url=new URL("../icons/bedroom_parent.svg?v=91d271d24d0a29e6345dc7d2e4bfb2a20c0fb2b77df22c22de6841e181dd71ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
