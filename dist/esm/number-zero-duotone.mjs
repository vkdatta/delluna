export const name="number-zero-duotone";
export const id="dl_fbe925d4d7a342b9ae55";
export const url=new URL("../icons/number-zero-duotone.svg?v=f6dff0420a5f80b97d81a3a39656750c211612938c57e2f7619f5d4fc585a1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
