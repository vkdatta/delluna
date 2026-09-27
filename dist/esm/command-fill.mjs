export const name="command-fill";
export const id="dl_16f8ed07445f4401b247";
export const url=new URL("../icons/command-fill.svg?v=52a4bc9c7bc0e96bc4bccbf3c5c2ab5b53bc506b9a326770b504afbac1a66f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
