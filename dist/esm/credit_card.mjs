export const name="credit_card";
export const id="dl_8d347ca49435a26e7189";
export const url=new URL("../icons/credit_card.svg?v=d8109cc7249e2f330d4c51364d4eac6f2043d7e33b53fb6c986a8f811eae2021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
