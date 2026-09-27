export const name="divide-thin";
export const id="dl_0db9aaf6688b4ce3b86b";
export const url=new URL("../icons/divide-thin.svg?v=4991bfd09cef5fba06a8197246ff38cec4521b8f0f89bc613b182008ecc612f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
