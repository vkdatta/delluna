export const name="asterisk";
export const id="dl_fcbd30a5889f4244a7d2";
export const url=new URL("../icons/asterisk.svg?v=ca0c85d270d8cd048d6ab61ce1e954eeb2b55732fef29cfe8b51ab3c8e72ba3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
