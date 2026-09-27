export const name="skip-forward-circle-bold";
export const id="dl_e7133e6fd9ddefad35dc";
export const url=new URL("../icons/skip-forward-circle-bold.svg?v=3a06fa56c007281b3fdc241078e6af42424cb999ab5ec6d301096491c7edc8b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
