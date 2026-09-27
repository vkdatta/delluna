export const name="lucid_3-octagon-minus";
export const id="dl_621b9d769a2e4b338647";
export const url=new URL("../icons/lucid_3-octagon-minus.svg?v=972ac07754a4b8c84e8dfcc95fad588bcb6f9177464a992b2a667cca2b63758f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
