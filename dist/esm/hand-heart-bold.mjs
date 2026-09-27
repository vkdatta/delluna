export const name="hand-heart-bold";
export const id="dl_640f127094c54f1b8705";
export const url=new URL("../icons/hand-heart-bold.svg?v=7703fc1d5460ef25abbf6c8960661b22df7b3fd30f7b3e355a178f790f51ac8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
