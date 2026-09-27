export const name="google-drive-logo";
export const id="dl_f7e09318c8b4471cb825";
export const url=new URL("../icons/google-drive-logo.svg?v=69c6686459e8655fa7e76bc5d8b6e7b3bc81d6284ca5e00d7a4cc67ad5f81c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
