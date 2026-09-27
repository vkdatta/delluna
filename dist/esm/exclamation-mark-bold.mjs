export const name="exclamation-mark-bold";
export const id="dl_f3c83efe57674462958e";
export const url=new URL("../icons/exclamation-mark-bold.svg?v=e2bcb9c8be035e00eaf5ba6a6288423bb19e56190504872afdc3f9aeee851572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
