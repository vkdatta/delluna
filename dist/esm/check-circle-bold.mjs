export const name="check-circle-bold";
export const id="dl_ab8ba0cecfb2406e9177";
export const url=new URL("../icons/check-circle-bold.svg?v=9cd040c92d167fe95d10fe665553e880a36a976970f379dcc866476bf645f668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
