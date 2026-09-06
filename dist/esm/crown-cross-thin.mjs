export const name="crown-cross-thin";
export const id="dl_1f3e743efd9b474f8bec";
export const url=new URL("../icons/crown-cross-thin.svg?v=04934a8baa869771d01f0221d2f131d53941f6676676e2d50ccfd01d999c83aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
