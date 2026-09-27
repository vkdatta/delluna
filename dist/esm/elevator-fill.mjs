export const name="elevator-fill";
export const id="dl_807db07cb36a8edc44ac";
export const url=new URL("../icons/elevator-fill.svg?v=42f9fafa28b7570706dfd191e8325492799b122b4bd8728b39f21df65ad06103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
