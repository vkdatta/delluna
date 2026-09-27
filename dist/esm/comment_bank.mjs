export const name="comment_bank";
export const id="dl_4abfcde7288a4829adef";
export const url=new URL("../icons/comment_bank.svg?v=0424f4fc0982a45ab1e6486d412bf2e6e2a81a8beb7b07866328c8eed7b92d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
