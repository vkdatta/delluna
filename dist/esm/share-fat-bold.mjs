export const name="share-fat-bold";
export const id="dl_8eb24d2ab8f1cc63dbf8";
export const url=new URL("../icons/share-fat-bold.svg?v=130948514979a4b1d4ff4a8e2cfe3f632626049f8c5f05004cc2a8eeb23bae60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
