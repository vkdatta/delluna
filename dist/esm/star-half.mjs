export const name="star-half";
export const id="dl_14d5b7a365fb2212dbcb";
export const url=new URL("../icons/star-half.svg?v=bb4d0ce4a0ad6842767ce42268e1c025d18126e8a2fe0d299497b2143b9a666f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
