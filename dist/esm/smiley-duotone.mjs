export const name="smiley-duotone";
export const id="dl_d6eeaa56d4e9a5752dcb";
export const url=new URL("../icons/smiley-duotone.svg?v=6e4470d92c462836e3a150d3076936a2a50ae95e64b115d63c8d76a09f475fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
