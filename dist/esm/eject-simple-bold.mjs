export const name="eject-simple-bold";
export const id="dl_da13cd6d571949b99911";
export const url=new URL("../icons/eject-simple-bold.svg?v=e31749ab3e99575465914f63ee19a4b4f672e37cd142373476c7f65f522d460c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
