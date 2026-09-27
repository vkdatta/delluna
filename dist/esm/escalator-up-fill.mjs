export const name="escalator-up-fill";
export const id="dl_6c1163b777c9441fbb12";
export const url=new URL("../icons/escalator-up-fill.svg?v=70858b8bdb15af546511e197f9215a7f1dcef0ff9afc0f1b362680d82867f5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
