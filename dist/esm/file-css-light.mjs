export const name="file-css-light";
export const id="dl_5bbf2a5d8f994f20a98c";
export const url=new URL("../icons/file-css-light.svg?v=fcf7bdc33a5dde7e8412a39b2960c63d8100ce449ff6b9d236e890a3eeb7b224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
