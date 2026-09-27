export const name="arrow_circle_left";
export const id="dl_13c470425dd252939b95";
export const url=new URL("../icons/arrow_circle_left.svg?v=7249d1b18df20d301eb5829c33878e24724064f4405a1aa20a86e3fb8c98ef5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
