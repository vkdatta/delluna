export const name="floppy-disk-duotone";
export const id="dl_af13cb0211b4481594bd";
export const url=new URL("../icons/floppy-disk-duotone.svg?v=f71f3cd35caa70eb63a6e12fb50b0ac33051f2889cc010f7423ee8342a0d36a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
