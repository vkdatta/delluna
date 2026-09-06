export const name="pentagram-thin";
export const id="dl_05f2926bfb644c6da49a";
export const url=new URL("../icons/pentagram-thin.svg?v=44e223bd57f5c7d5b0d13bae3a2bf5a0dd562dab852f6f4daf57893602c370d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
