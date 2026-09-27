export const name="acute";
export const id="dl_4a43f9212940206907e7";
export const url=new URL("../icons/acute.svg?v=4e488adb9ec4d0b6b033d89ba0de3c032cf163a4d776c8509236e628536bce27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
