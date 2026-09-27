export const name="content_cut";
export const id="dl_5fcaa7ee281f5478d150";
export const url=new URL("../icons/content_cut.svg?v=4db8d1a648efe69f36d7e73c74fc857c68489f617dd7e5bd44b6b307f70dd911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
