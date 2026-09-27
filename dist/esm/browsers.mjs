export const name="browsers";
export const id="dl_8aa9ae5dd68e45acb1a4";
export const url=new URL("../icons/browsers.svg?v=331a7268a08e420b24e56d6df135c1e3fd6e4b33b106be227b12f76c25b03691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
