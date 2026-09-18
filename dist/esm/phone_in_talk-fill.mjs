export const name="phone_in_talk-fill";
export const id="dl_bb2abc69e54c4456b70c";
export const url=new URL("../icons/phone_in_talk-fill.svg?v=5a46d295682cd3581ab1ef473fce0e93288ee493047eaefb1504cba9bd500da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
