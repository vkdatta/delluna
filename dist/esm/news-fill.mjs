export const name="news-fill";
export const id="dl_099c508da890437c9ba9";
export const url=new URL("../icons/news-fill.svg?v=7740d0dc7434a3cbb3e60c68a13da3bd9f02ba6fce1b3e4e184eceafa7e1ef16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
