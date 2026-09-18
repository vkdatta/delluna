export const name="chat_apps_script";
export const id="dl_7fccbb9375d742a28069";
export const url=new URL("../icons/chat_apps_script.svg?v=a9ba98b271a0085110f2cde5a1bdd373062dd7068993aaa36d4f654af05c0b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
