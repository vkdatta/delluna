export const name="surround_sound";
export const id="dl_7158f4fcc458768bc0db";
export const url=new URL("../icons/surround_sound.svg?v=78f89582eae0a88b1fad681737880b819d0c6187f6ad53fdb01230f14d1f2580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
