export const name="business_chip";
export const id="dl_1fb4cd36f79e73a1cc17";
export const url=new URL("../icons/business_chip.svg?v=48cdce5afe515e42e839084fc0e984a09b19c6c33e6305c4f9fa155501b0cde0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
