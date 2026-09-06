export const name="mountains-duotone";
export const id="dl_4b1d452ac4174bdeae8c";
export const url=new URL("../icons/mountains-duotone.svg?v=6fae82b105c1af7bff054c4ccba8a31fc06c3e63205ea604aa48ab71bb08bd25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
