export const name="article_person-fill";
export const id="dl_742cd0197f27421d7f7f";
export const url=new URL("../icons/article_person-fill.svg?v=e0a7649627dadbd9a05f28232cbde4fcf640c8aed0a753c39c23f5301398b47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
