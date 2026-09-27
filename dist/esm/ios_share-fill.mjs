export const name="ios_share-fill";
export const id="dl_f4b63afafdfe2990faa5";
export const url=new URL("../icons/ios_share-fill.svg?v=161814f3ef5cbcc7549e129b5bc899e10fd31fc18a0763925ce018bc92df3103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
