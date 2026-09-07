export const name="spotify-logo-bold";
export const id="dl_54d83cdfa60d45809132";
export const url=new URL("../icons/S/spotify-logo-bold.svg?v=86f6a69390e8410d0642ae11beb1cc5aebada3af5c13bc2868da0254404511ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
