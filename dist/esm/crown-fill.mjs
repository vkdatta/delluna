export const name="crown-fill";
export const id="dl_6b23fab2afa24bdf931e";
export const url=new URL("../icons/crown-fill.svg?v=6b583612573b7fef5cbef988364794e26d01adf8f616205c4fcf3bcb626d4b5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
