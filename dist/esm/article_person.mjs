export const name="article_person";
export const id="dl_de4a58c90fd482f99f0f";
export const url=new URL("../icons/article_person.svg?v=8ec0e499b5b555cf4d41786995fa372c65fb7a9515a19548cacbfae28389abaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
