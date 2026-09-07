export const name="skip-back-circle-duotone";
export const id="dl_d5b0f8c21e654ed38091";
export const url=new URL("../icons/S/skip-back-circle-duotone.svg?v=ab256226bd81c3bbd2110b0ca9713a42ab273e500223ad0886b112fdb5a08419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
