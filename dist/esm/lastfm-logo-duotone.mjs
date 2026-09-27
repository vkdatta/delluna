export const name="lastfm-logo-duotone";
export const id="dl_b7f833d840ad40748177";
export const url=new URL("../icons/lastfm-logo-duotone.svg?v=8375d37febda147f1c0e51ecf10568701c84714afb6d4ad3b3da43b515fbc7d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
