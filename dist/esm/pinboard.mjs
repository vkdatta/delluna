export const name="pinboard";
export const id="dl_45900542a478372a87bb";
export const url=new URL("../icons/pinboard.svg?v=1ee84178d08450bddc60586248fcf93f33d5208a6805c48b3bff5b0aa3957116",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
