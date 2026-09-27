export const name="identification-card-thin";
export const id="dl_a3e309160487449196c8";
export const url=new URL("../icons/identification-card-thin.svg?v=25bdb6b13a43555395734e5273e21b7ff8d1dc254ad3cdb7ef3967c44a562fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
