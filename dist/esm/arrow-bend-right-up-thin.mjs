export const name="arrow-bend-right-up-thin";
export const id="dl_4a7aa5b3707b4cf6b8ae";
export const url=new URL("../icons/arrow-bend-right-up-thin.svg?v=70b44320f3e5bfe956c95aa575a69896cc165e8cff0ccadcea236e2bfa8a3957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
