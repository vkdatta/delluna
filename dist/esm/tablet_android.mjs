export const name="tablet_android";
export const id="dl_5c35327dabb0646b9eba";
export const url=new URL("../icons/tablet_android.svg?v=d7a11aaa8b28be2399a08e2ad52de2f922eb0b34ed7b31ae94e175cd02aa68e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
