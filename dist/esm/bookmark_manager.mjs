export const name="bookmark_manager";
export const id="dl_0df3e5b4d5da717aa82f";
export const url=new URL("../icons/bookmark_manager.svg?v=379763ba7e01177099b91703fcd111c479d36eb4bb1b8fb68f1d62b111597a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
