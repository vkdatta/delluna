export const name="train";
export const id="dl_707e86e24b514259d810";
export const url=new URL("../icons/train.svg?v=db3b3cfc719ab6bed96bbc7fec0731dfc12fc92e88a64dcb8f9a136fa56db42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
