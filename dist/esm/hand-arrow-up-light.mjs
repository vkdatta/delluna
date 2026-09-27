export const name="hand-arrow-up-light";
export const id="dl_4014cfbce52d494995ff";
export const url=new URL("../icons/hand-arrow-up-light.svg?v=1b5640fb6eda304ce82d65ca5fa94a81f37bbbd597fa432299017fb10f69c22d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
