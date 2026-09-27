export const name="asterisk-light";
export const id="dl_e4c8bad305924f00baf8";
export const url=new URL("../icons/asterisk-light.svg?v=3dde410ea273945935bfe6493d4c65da8f8806c4fc23cbe6185a64f69900d4dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
