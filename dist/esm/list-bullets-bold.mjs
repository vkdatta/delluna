export const name="list-bullets-bold";
export const id="dl_ecbc60937e6541009fb0";
export const url=new URL("../icons/list-bullets-bold.svg?v=1c6e085b3edfa26d796f6a3b2795a8b6abdd154a7fcdc299b06794c4ffe04f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
