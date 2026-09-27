export const name="caret-line-right-bold";
export const id="dl_5884d0678fcf4fcfbf39";
export const url=new URL("../icons/caret-line-right-bold.svg?v=2e2713e937c0cb614955688b689eb013b2d5d9e0fcd4a27905afd42311985362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
