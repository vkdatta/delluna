export const name="goodreads-logo";
export const id="dl_81510ee5200340648120";
export const url=new URL("../icons/goodreads-logo.svg?v=01894d13e967326d7c128db37262568c4b5f19d23a7cd5679c3f49f323d0703b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
