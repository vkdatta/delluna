export const name="person-simple-bike-thin";
export const id="dl_448bfb9aa27c4fe688cc";
export const url=new URL("../icons/person-simple-bike-thin.svg?v=deddf38037b124b40c98fb8be631639a05cf7f820301932c3ad9dd56817a8991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
