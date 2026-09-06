export const name="beach-ball-light";
export const id="dl_d446a97a2fd44688b02d";
export const url=new URL("../icons/beach-ball-light.svg?v=81f171b2abe0627281453bcb63022ddc6ec85ed1ac9d8315deb872016636ec0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
