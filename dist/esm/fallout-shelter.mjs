export const name="fallout-shelter";
export const id="dl_b5d1f442f13f4a5197c6";
export const url=new URL("../icons/fallout-shelter.svg?v=3f7496b7f8c283176897b6cda46988eb256b2109df17174b5cd5299333f9002f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
