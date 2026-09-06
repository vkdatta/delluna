export const name="phone-call-thin";
export const id="dl_37c3b15a8c244f51b76f";
export const url=new URL("../icons/phone-call-thin.svg?v=d607cc0f154031558e44cc3ff0c252e3750574d2c707c7f4b5246b9fdb01c30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
