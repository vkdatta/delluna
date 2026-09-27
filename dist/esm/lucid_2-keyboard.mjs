export const name="lucid_2-keyboard";
export const id="dl_4a4382f07352449699e5";
export const url=new URL("../icons/lucid_2-keyboard.svg?v=3f37ec7daa3aaab5c1082a1b4bf2953ca06ab9a79713e64990db3b1e6181c082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
