export const name="breaking_news-fill";
export const id="dl_79486e174f3c490ca440";
export const url=new URL("../icons/breaking_news-fill.svg?v=1c0f82c083826aa830539ffdbab1b882c2171552573a36b064f0e73ebfdce7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
