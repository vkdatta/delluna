export const name="user-circle-gear-bold";
export const id="dl_8f0013463545baaa85c2";
export const url=new URL("../icons/user-circle-gear-bold.svg?v=988ba950bacd5a1b4e8e66d7045c463e2d17caae74094179f2b5e7b963c5503a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
