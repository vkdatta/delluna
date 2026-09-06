export const name="caret-up-light";
export const id="dl_3faa7eecf3a04c7cabb6";
export const url=new URL("../icons/caret-up-light.svg?v=4e596b888a146c867faba93c5ef2e53a360a70c76ce45b94a3936f7cef4d97cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
