export const name="subway-thin";
export const id="dl_50c0b94c7d236db6acbe";
export const url=new URL("../icons/subway-thin.svg?v=7f05416d76b8fd2d493d8c2e6f541c4b6d015c5a85c47a77201fab0529d6a3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
