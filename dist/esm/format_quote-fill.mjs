export const name="format_quote-fill";
export const id="dl_3acf29a13d394c48b3a1";
export const url=new URL("../icons/format_quote-fill.svg?v=f463f52108323e1e887661893e18ec076c0cfe8793f1ab79b76f2b2a3b86c4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
