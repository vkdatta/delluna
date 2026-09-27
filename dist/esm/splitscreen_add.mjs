export const name="splitscreen_add";
export const id="dl_890af586e4dc8113424e";
export const url=new URL("../icons/splitscreen_add.svg?v=7846e3fd3bd21689cad6212aeb8a659d09a419eee7092d61c4ffc6cfc8e17c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
