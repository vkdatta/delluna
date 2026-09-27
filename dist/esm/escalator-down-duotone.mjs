export const name="escalator-down-duotone";
export const id="dl_b7277fd3e3784c24918d";
export const url=new URL("../icons/escalator-down-duotone.svg?v=f252c926dc556d8405ef2400d29bb4acde2b05e1abed53a1399a4fb929c7d16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
