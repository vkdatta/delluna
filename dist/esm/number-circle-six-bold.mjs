export const name="number-circle-six-bold";
export const id="dl_70e4c8eab7534702a90c";
export const url=new URL("../icons/number-circle-six-bold.svg?v=f60ab87ed06896791e92cd65cdce24d42e4f956c4bbdf6cc0e16359294d95975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
