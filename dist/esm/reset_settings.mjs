export const name="reset_settings";
export const id="dl_f83e69088451450c8f95";
export const url=new URL("../icons/reset_settings.svg?v=2994727b874e7cd14177fdf09a1e5e65edd49215dada1ef6defa6dc0c096c289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
