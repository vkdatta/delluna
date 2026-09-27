export const name="swipe_left_alt-fill";
export const id="dl_ba7d7bc63c4168831c27";
export const url=new URL("../icons/swipe_left_alt-fill.svg?v=b25b6c05a81b532ba80b465537825ecbac06dcadaca58bb524540b0317e06295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
