export const name="cow";
export const id="dl_346e3be44b5c4bf5ac2d";
export const url=new URL("../icons/cow.svg?v=39f22ebcdb0087603caf3cf3d8e955f5a69f2dcd10a905c2c55b16cd7c7cef09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
