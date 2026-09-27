export const name="lucid_3-pilcrow-left";
export const id="dl_997cb987f98b4f45b2bf";
export const url=new URL("../icons/lucid_3-pilcrow-left.svg?v=776f939745f1fe2a0c29e661971b1ad926cb91cdbcc36c74c7f2699a80efe390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
