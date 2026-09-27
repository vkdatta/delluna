export const name="hand-heart-light";
export const id="dl_0315de405f7842029873";
export const url=new URL("../icons/hand-heart-light.svg?v=c908b0592104d6ff78e5eed8b1f3b31150ae4eb0f62e5beb0aaad9c24d950fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
