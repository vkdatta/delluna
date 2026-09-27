export const name="device-rotate-thin";
export const id="dl_eac715be3d324b7badf8";
export const url=new URL("../icons/device-rotate-thin.svg?v=0d28f6f46b3b2c9aab98468045e5f860d0ec0e46359381a4a4d57a6746234e40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
