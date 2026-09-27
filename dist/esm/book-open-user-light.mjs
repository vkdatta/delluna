export const name="book-open-user-light";
export const id="dl_087850a8de114ed691a2";
export const url=new URL("../icons/book-open-user-light.svg?v=7a9e0f8b5b2d92a0ba76150117e459c49d68924c7b581594ce5e0723187706c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
