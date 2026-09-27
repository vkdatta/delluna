export const name="needle-thin";
export const id="dl_c01637509b954af9ab29";
export const url=new URL("../icons/needle-thin.svg?v=3fd266095cff8ee98991551a86fa8d999ff6b36e6f6ceb903d0cda2173f73f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
