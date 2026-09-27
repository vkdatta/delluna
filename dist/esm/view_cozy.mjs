export const name="view_cozy";
export const id="dl_26dfa6f0c9b1d2845c64";
export const url=new URL("../icons/view_cozy.svg?v=c479e85513448533d1f9c121724fe0f6ed24142c2e5fa978159f236d1a8929a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
