export const name="code-simple-bold";
export const id="dl_f21b175e7d734c2dab08";
export const url=new URL("../icons/code-simple-bold.svg?v=5323e79bf68043dffcde3eff19796890ec802ed928710680ce4a6321382267a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
