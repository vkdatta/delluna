export const name="swipe_down-fill";
export const id="dl_e847f91f2e804c7980dd";
export const url=new URL("../icons/swipe_down-fill.svg?v=31063347b8f45c0f5612f3cf206f6933e7728a70b93740dbf5f9133b25429e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
