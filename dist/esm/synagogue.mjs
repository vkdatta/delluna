export const name="synagogue";
export const id="dl_9ac9d192e038c24eb477";
export const url=new URL("../icons/synagogue.svg?v=e314f6ce4c71b7ef5c60f20f059a669eb041dd59d42d447780544263ccedad93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
