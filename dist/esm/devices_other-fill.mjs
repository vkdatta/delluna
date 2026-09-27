export const name="devices_other-fill";
export const id="dl_89a30291f08e9d93a89a";
export const url=new URL("../icons/devices_other-fill.svg?v=74fbc468fcdf346d75725f3cf19255805266a7ad0b97305561cd100c27e6c33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
