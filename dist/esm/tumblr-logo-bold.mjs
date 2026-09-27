export const name="tumblr-logo-bold";
export const id="dl_a2ab53dc00315339c780";
export const url=new URL("../icons/tumblr-logo-bold.svg?v=80eabfb1342e2cb39e2e5cb82a3c6c591dd17b4169054b16c1c9a0428dcd7d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
