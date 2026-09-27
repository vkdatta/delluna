export const name="box-arrow-up-bold";
export const id="dl_ce3c7a76139f4b59818b";
export const url=new URL("../icons/box-arrow-up-bold.svg?v=ace65ab1ebb151fe447f6f50df8c3e20acfb1e03d4cbfb277c2d260d93dc5b44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
