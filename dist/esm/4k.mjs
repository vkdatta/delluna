export const name="4k";
export const id="dl_7e497416c51349d2bd3a";
export const url=new URL("../icons/4k.svg?v=e530950bf86cf292b57c19ab2c284c24576251ce743be20a36c0f021f6ad9dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
