export const name="check-circle-bold";
export const id="dl_ab8ba0cecfb2406e9177";
export const url=new URL("../icons/check-circle-bold.svg?v=f176d6bdb54b124a6da9141515984d698b5c35dbe727dda7f8c1b22a2d130e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
