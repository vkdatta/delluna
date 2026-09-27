export const name="lucid_1-between-horizontal-end";
export const id="dl_4fce8e308bd74dffb536";
export const url=new URL("../icons/lucid_1-between-horizontal-end.svg?v=02889a4ecdfe5b94cac0fb340268e24149aaa09d31aff643ba3935e55e893e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
