export const name="alien-bold";
export const id="dl_3cce43995f74476da000";
export const url=new URL("../icons/alien-bold.svg?v=ddba06eea546e1b403cd4f98d0390ec0adcf97a325179e2dfd43f1398dc31ed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
