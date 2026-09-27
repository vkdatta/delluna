export const name="number-one";
export const id="dl_9de53fcf4c1a4b6e8068";
export const url=new URL("../icons/number-one.svg?v=e9d5f9cdaa8df2d63b503e16fbb9347d02eda64489f2be35f2a70b49a8073716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
