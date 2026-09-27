export const name="list_alt";
export const id="dl_5f4b502922daa79825cc";
export const url=new URL("../icons/list_alt.svg?v=ce11e71b678f8fc81d451117ad741cc17faf4914a9707c35b73a001c35855c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
