export const name="book-open-text-thin";
export const id="dl_75934a76933148e19bf4";
export const url=new URL("../icons/book-open-text-thin.svg?v=71a790d2bcb923589a3249f0786a81a079b74388a4e77d9371f415618981c1e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
