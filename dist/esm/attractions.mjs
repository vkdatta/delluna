export const name="attractions";
export const id="dl_0acd7e7fbc1a13365e21";
export const url=new URL("../icons/attractions.svg?v=d105bb4f826d483849196a4b0d06234fb2321f36e521015baeba19517afe65e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
