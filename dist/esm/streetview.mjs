export const name="streetview";
export const id="dl_0824f0e342897f57bc71";
export const url=new URL("../icons/streetview.svg?v=ca67d89652b8161f874a2e4c7d6c6ccfe88cea82ef5feafb58ed7975af33b35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
