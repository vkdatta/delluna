export const name="lucid_1-cigarette-off";
export const id="dl_af4f91d931c54c279ec8";
export const url=new URL("../icons/lucid_1-cigarette-off.svg?v=9ce73611f52159d6940ac4c8063479af7286e99bc020cace2311c6b29b681ad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
