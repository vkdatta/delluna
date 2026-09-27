export const name="eyes-light";
export const id="dl_ec0d968ba0394c6bbc49";
export const url=new URL("../icons/eyes-light.svg?v=e031007870502c88cec804f2cc17d2a1d4277ad2f0c8ab2611492aa6e9ade371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
