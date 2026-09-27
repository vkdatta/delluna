export const name="book-open-duotone";
export const id="dl_fd0417010aa34da29897";
export const url=new URL("../icons/book-open-duotone.svg?v=07ff7290d01b381fe9e382b88340304a37b9ddefa09bd133f3cd595e021607e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
