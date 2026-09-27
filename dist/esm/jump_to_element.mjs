export const name="jump_to_element";
export const id="dl_f12efeb67f69b465cc8d";
export const url=new URL("../icons/jump_to_element.svg?v=93a600d09a60dc9479089581d42aeca84754af47af62e2c88bbafc2205ea80c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
