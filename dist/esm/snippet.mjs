export const name="snippet";
export const id="dl_8feeb6ca45654487b6d4";
export const url=new URL("../icons/snippet.svg?v=9b621062918d64f1a7e36c0284ad99aae246b0be37c9c37c42ff7805b43c822d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
