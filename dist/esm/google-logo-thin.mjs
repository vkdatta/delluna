export const name="google-logo-thin";
export const id="dl_aa04e655ebc5478f8c29";
export const url=new URL("../icons/google-logo-thin.svg?v=b650e5268a377511d4c88ab84fedfebfedbb4435716534cad84d301624a5bcc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
