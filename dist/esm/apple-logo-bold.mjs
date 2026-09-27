export const name="apple-logo-bold";
export const id="dl_4ed7ce6c14fa47c29e6e";
export const url=new URL("../icons/apple-logo-bold.svg?v=d507c0e3c5e5c8476b11a6801641eb0ee3d0b73668b676a24cd281ec0067bdf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
