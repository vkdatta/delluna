export const name="smiley-blank-fill";
export const id="dl_bfcda6c17d5c45e0a2ce";
export const url=new URL("../icons/S/smiley-blank-fill.svg?v=9cb2bf556ed474df3db6d64f089a07d0a3a45a68a056b51f7b1c527e9beb8b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
