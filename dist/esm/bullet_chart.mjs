export const name="bullet_chart";
export const id="dl_576ee2d604729d71c3b5";
export const url=new URL("../icons/bullet_chart.svg?v=2518de232bd0ae5ed74ee6683ce4f499a25bcd08800f8e8e61fc55600adbf40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
