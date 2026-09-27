export const name="play";
export const id="dl_daec9a338c1a4e3d9f6b";
export const url=new URL("../icons/play.svg?v=03ae3d2e57ec5409595bd5f8082a47175ad865d741b0dc63b71e133db6adadab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
