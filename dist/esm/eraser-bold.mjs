export const name="eraser-bold";
export const id="dl_77d2ddb5469741d89de3";
export const url=new URL("../icons/eraser-bold.svg?v=fd40aeff7efd6d2ac4e567352d7450be9683760556414ebca42d553b438c9321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
