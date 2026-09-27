export const name="patreon-logo-bold";
export const id="dl_884886fb67444a418136";
export const url=new URL("../icons/patreon-logo-bold.svg?v=cac1a70f2e4728e65fe93559e790241af6d7bdd82655f676600916bac3547234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
