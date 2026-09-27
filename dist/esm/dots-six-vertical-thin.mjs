export const name="dots-six-vertical-thin";
export const id="dl_429a9ecdde024889b6f1";
export const url=new URL("../icons/dots-six-vertical-thin.svg?v=1fec8cf9e6d5128d2421ebed5134a5a24ba056184d61c3f9863ae771a9f2e580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
