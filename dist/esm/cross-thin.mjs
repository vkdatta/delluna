export const name="cross-thin";
export const id="dl_5b76f138fba14ad381d1";
export const url=new URL("../icons/cross-thin.svg?v=9e499a201d6e8554f13c38949b4190352a91750fbb2fc288a35403fd1ecf8cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
