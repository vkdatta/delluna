export const name="screencast";
export const id="dl_4e18325688e4041ff13e";
export const url=new URL("../icons/screencast.svg?v=f4e49997e6d6abc6586758c347d97d7c88f3e48a888b5fe1a2d472ca81ee42f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
