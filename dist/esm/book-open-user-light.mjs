export const name="book-open-user-light";
export const id="dl_087850a8de114ed691a2";
export const url=new URL("../icons/book-open-user-light.svg?v=980504a75958f20cb7635c4c78c3f6c5e6e85b629b755b9268736c89b7be2107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
