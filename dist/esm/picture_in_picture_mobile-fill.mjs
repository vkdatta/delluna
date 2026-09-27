export const name="picture_in_picture_mobile-fill";
export const id="dl_bf61e1f981e4752a16b5";
export const url=new URL("../icons/picture_in_picture_mobile-fill.svg?v=d89b939595aca6c7070218d1ad53d589a8a47d1f7fb89c2f6a206df00d207acb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
