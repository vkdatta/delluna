export const name="settings_applications";
export const id="dl_81c8dcd39797402983f6";
export const url=new URL("../icons/settings_applications.svg?v=5795e67adb9e79e40c9cc380ded269765948885562f2b7f019d0821c01739b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
