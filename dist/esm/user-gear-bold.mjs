export const name="user-gear-bold";
export const id="dl_459bf1ec8d63c1072af7";
export const url=new URL("../icons/user-gear-bold.svg?v=961bc22f6c2c614b645615ce7e3bfa9e225964630c0b6916223b64ac57fc17c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
