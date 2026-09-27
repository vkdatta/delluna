export const name="lucid_1-circle-fading-arrow-up";
export const id="dl_5e809ce5532340b5bc85";
export const url=new URL("../icons/lucid_1-circle-fading-arrow-up.svg?v=ff55faa5930ac7d4c50cce8ead3fefce38eee94b528d4f9f508fe8877374f77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
