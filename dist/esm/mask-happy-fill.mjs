export const name="mask-happy-fill";
export const id="dl_62980e6faa7b4b8ba7d8";
export const url=new URL("../icons/mask-happy-fill.svg?v=259daa76c20220b97a373b63d62f1c17223490952c4d5e7160a6d7ccfff14209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
