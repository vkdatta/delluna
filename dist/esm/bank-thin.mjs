export const name="bank-thin";
export const id="dl_d827fb3ba9ab4b61bae1";
export const url=new URL("../icons/bank-thin.svg?v=3f815e5ce87d0f543d2f3158e6be2754625273cceb218702ec603fa27ceee3bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
