export const name="trees";
export const id="dl_be6bf339c27e48288952";
export const url=new URL("../icons/trees.svg?v=c1d2e8bb9522c847fe153beb7f06bc673fec8c9c20878fdc805d71f6c9afec5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
