export const name="goodreads-logo";
export const id="dl_81510ee5200340648120";
export const url=new URL("../icons/goodreads-logo.svg?v=b15d9cfc1ef6830c01ae4f49cadda62d9e38a5db776627bc6f885eb0f1627ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
