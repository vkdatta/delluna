export const name="priority-fill";
export const id="dl_274a2b9afacb0472bfeb";
export const url=new URL("../icons/priority-fill.svg?v=a81eb72a14e50cc3195c4bfbd115d71f8e1d38c1e1a0d99fe66537c2ba2070fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
