export const name="moon-stars-light";
export const id="dl_4636ce88d220456c9782";
export const url=new URL("../icons/moon-stars-light.svg?v=5d4fd6d558ea341d3062f041137ce65c5b53e7018d0ba22aa9ed922c3693800b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
