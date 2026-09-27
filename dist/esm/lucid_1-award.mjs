export const name="lucid_1-award";
export const id="dl_92c839234acb41e796c2";
export const url=new URL("../icons/lucid_1-award.svg?v=30d213737e8e4e6012acec66f152c9cbd9aeea052bc7b40f8501d7b2e67b3b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
