export const name="curtains_closed-fill";
export const id="dl_89525b03d1434f06d544";
export const url=new URL("../icons/curtains_closed-fill.svg?v=9411a667b8473376fc34d598fc727440ddbfaa6b5eaafedadbfce447d9d68de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
