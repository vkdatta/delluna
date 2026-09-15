export const name="earbud_right";
export const id="dl_8fedb2681cbb4025adad";
export const url=new URL("../icons/E/earbud_right.svg?v=29e99b4f2e66e9e7ee456a7acf185d52292c426dfa27d334c6a2533a17e45198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
