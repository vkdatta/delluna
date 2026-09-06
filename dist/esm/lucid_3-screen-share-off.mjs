export const name="lucid_3-screen-share-off";
export const id="dl_a67ad07ef75648c3ac54";
export const url=new URL("../icons/lucid_3-screen-share-off.svg?v=b07280c6d58ba488b4112a439195982e79fdd6ad361e69868960568b33d29fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
