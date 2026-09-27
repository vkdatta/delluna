export const name="flag-pennant-bold";
export const id="dl_dd34f8c7ad3549858156";
export const url=new URL("../icons/flag-pennant-bold.svg?v=e8acb8a9319c09367445505c833d10a6f43257264ed839812a7494c420d0d9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
