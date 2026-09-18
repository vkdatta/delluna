export const name="sticky_note";
export const id="dl_798fbc4c495945e394ca";
export const url=new URL("../icons/sticky_note.svg?v=1193611f5d6bb64188af139552986a45f962fecbfc944b3943eef9f77bd95b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
