export const name="privacy_tip-fill";
export const id="dl_a77ba6d7a35fb78f96a2";
export const url=new URL("../icons/privacy_tip-fill.svg?v=34b737dfc08d1cc9b508834d3ffbc0a7c3b16c2aa5aea443db309365bdd489df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
