export const name="skip-forward-circle-thin";
export const id="dl_e9a9b4b59c244f968267";
export const url=new URL("../icons/S/skip-forward-circle-thin.svg?v=b52fae088122610e554d0b009f3359bc91979fc060b245afc8ab89efb317be59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
