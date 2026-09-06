export const name="recycle-bold";
export const id="dl_ebe7a249ee25483d978a";
export const url=new URL("../icons/recycle-bold.svg?v=bb5d33e740c9af0cda81f1f477f7cd36eb7cdf11c3a88c3428059f9775e3cf81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
