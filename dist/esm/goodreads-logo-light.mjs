export const name="goodreads-logo-light";
export const id="dl_7e42aa704abd49fab1ee";
export const url=new URL("../icons/goodreads-logo-light.svg?v=a79259c530a2a80bf367bdc82ed87296293f1060fe445e32808ef39dc5884807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
