export const name="google-play-logo-bold";
export const id="dl_f6a31e99e9b246c88e7f";
export const url=new URL("../icons/google-play-logo-bold.svg?v=0683b394878cfb55845bfde69ab1db3f7f45395d7bb8d684554c8d0d3867fc06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
