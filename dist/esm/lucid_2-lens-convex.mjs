export const name="lucid_2-lens-convex";
export const id="dl_85f41969e5164830b7c7";
export const url=new URL("../icons/lucid_2-lens-convex.svg?v=7bc603c0e3eaa411899bad04d206f64e05dfd76898f16a9610b8dcee7ec9626e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
