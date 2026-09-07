export const name="globe-hemisphere-east-bold";
export const id="dl_42fa77dd113d42c4b768";
export const url=new URL("../icons/globe-hemisphere-east-bold.svg?v=7e3c3f77e0aa8db4b35b909ffa2aa9df1e45b9cab91fc60a2ae12d9c0e3863f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
