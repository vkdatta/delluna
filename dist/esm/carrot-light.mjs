export const name="carrot-light";
export const id="dl_d08c9b193a904943b308";
export const url=new URL("../icons/carrot-light.svg?v=31374de965c566c9b4f57957f362ccad392e2fb5b452adb12beb2915de352be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
