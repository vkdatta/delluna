export const name="youtube_searched_for-fill";
export const id="dl_9b45149c3ac2e4e902bd";
export const url=new URL("../icons/youtube_searched_for-fill.svg?v=a4b9e3e09ff9f5069e6167c39acf0af21a21a2b9bd0a1d64bf821b156b7d68b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
