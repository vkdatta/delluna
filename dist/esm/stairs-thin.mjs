export const name="stairs-thin";
export const id="dl_b963afb03eb949f686d6";
export const url=new URL("../icons/S/stairs-thin.svg?v=080a035d4a3ac63c6308a8011f4a519b294ec5a9896fb9ac2c4ec9afec551e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
