export const name="highlighter-circle-thin";
export const id="dl_79faf894e13d48b08a23";
export const url=new URL("../icons/highlighter-circle-thin.svg?v=6fee349f61166ab66f124e9ff29a76c62422d7c7f598c0f7805230f80928e1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
