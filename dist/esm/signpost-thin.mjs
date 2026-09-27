export const name="signpost-thin";
export const id="dl_14660f8572275638364d";
export const url=new URL("../icons/signpost-thin.svg?v=c98cfdc61deaa013febae5742289801b083208048f88996043afcc93c4601134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
