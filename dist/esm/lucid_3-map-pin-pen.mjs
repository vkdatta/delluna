export const name="lucid_3-map-pin-pen";
export const id="dl_cb2009bccf784cb6bb66";
export const url=new URL("../icons/lucid_3-map-pin-pen.svg?v=d8fc79d8bef565d49e9cdc089452d2b58b864b730119f239775fc3729c30dabd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
