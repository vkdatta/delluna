export const name="plug_connect";
export const id="dl_57beb1f85bd562bde81a";
export const url=new URL("../icons/plug_connect.svg?v=372d9935d3551443c4de9705e911262f0b535af6ca7c4527f55790f1ec8748ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
