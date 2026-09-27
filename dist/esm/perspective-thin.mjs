export const name="perspective-thin";
export const id="dl_ec6cbea1377d41d2aa04";
export const url=new URL("../icons/perspective-thin.svg?v=a261580ca5f7b4b7aaffa9bd1a0e10cb854a551f92bd7fd5ee6e83e23f4d48e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
