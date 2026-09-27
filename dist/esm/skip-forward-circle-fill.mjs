export const name="skip-forward-circle-fill";
export const id="dl_1322e60abfd50677f95d";
export const url=new URL("../icons/skip-forward-circle-fill.svg?v=59a26cc9b26ca8cbc03b0e7294c186efc11f87a6c108974ab1bdb4c45245c09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
