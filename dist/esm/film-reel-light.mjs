export const name="film-reel-light";
export const id="dl_219889ae62e648fca36e";
export const url=new URL("../icons/film-reel-light.svg?v=68aa021fea5ccf26ca211b85cfe7be35e2d32dedac54f447b74bd2ddb2d9b7d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
