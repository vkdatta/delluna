export const name="key-return-fill";
export const id="dl_cd9cae39506b42b782e1";
export const url=new URL("../icons/key-return-fill.svg?v=6c7156671304f1e2f7dd185c13f4cfa6463c3a77532f41c7be676fc32574fb1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
