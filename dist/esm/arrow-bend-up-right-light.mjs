export const name="arrow-bend-up-right-light";
export const id="dl_c1a935cda6a1485e9715";
export const url=new URL("../icons/arrow-bend-up-right-light.svg?v=1235b76698a5eeb4b69bc5bd2cbde013a560e9f777c684bd89a73243b75615f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
