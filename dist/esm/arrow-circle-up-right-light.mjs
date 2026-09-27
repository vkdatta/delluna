export const name="arrow-circle-up-right-light";
export const id="dl_7d0b946d336b4ee0a8ea";
export const url=new URL("../icons/arrow-circle-up-right-light.svg?v=e5b67d2da3b87c2e22008408b118f4baa3179241ef96701b93f743a7e68ca81e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
