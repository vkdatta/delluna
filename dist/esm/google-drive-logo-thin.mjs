export const name="google-drive-logo-thin";
export const id="dl_42bf6d02e6124ea480a9";
export const url=new URL("../icons/google-drive-logo-thin.svg?v=881ec13d68810737461943706b5f458831ebe376b5f6af86dc2b0148fb2f1232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
