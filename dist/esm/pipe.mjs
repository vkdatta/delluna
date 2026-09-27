export const name="pipe";
export const id="dl_3abf7cf2218f4ff6ae1c";
export const url=new URL("../icons/pipe.svg?v=f1cc628d4c2f4f995436e7fe2924d52dbec5d6c91397c6b8b5e50a1f3bad9edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
