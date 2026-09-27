export const name="content_copy";
export const id="dl_ddcbf2516ad7da60709e";
export const url=new URL("../icons/content_copy.svg?v=f5d88bba24bdf6ba7340b342d9c41a084d9a11b272efbd1b2c99b86140009ec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
