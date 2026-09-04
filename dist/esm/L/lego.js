export const name="lego";
export const id="dl_0d13cea0253144d09466";
export const url=new URL("../../icons/L/lego.svg?v=af8bd732d8974340ccc80f3430b5294fba31f68edf50af705b91494422abdbe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
