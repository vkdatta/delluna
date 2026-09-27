export const name="speaker-low-fill";
export const id="dl_2f530d8424ddaa70d60d";
export const url=new URL("../icons/speaker-low-fill.svg?v=e07536f13ccc1222633769875e48597659d0cc3e91f6c006707ac71fd8b91d9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
