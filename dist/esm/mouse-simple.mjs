export const name="mouse-simple";
export const id="dl_e02f1692478d497ebfb7";
export const url=new URL("../icons/mouse-simple.svg?v=b2cf8e788abe654ae3cb9c7d7ab65dfe0e0d5272dd5717bd2b58c16f19fc3ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
