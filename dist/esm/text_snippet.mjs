export const name="text_snippet";
export const id="dl_5af17e6c1e62c0bd730f";
export const url=new URL("../icons/text_snippet.svg?v=0a4636bc356340b838c70c49f3feab2cd77e796db9a50f9bb7e8b90dd541a0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
