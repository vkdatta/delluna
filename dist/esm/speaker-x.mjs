export const name="speaker-x";
export const id="dl_340e2ef5bc334cfcb07f";
export const url=new URL("../icons/S/speaker-x.svg?v=8a9b6f327fe0a72448e183e23c1712c7a9aa384050475004543d318e690c498f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
