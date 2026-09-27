export const name="lucid_1-book-headphones";
export const id="dl_adb4c448163e414d98b1";
export const url=new URL("../icons/lucid_1-book-headphones.svg?v=a6f9d28bc4a175fbe786e0880ebbde5f0e333a48e11d015a133c330e866f71a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
