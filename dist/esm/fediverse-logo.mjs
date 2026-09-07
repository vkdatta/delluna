export const name="fediverse-logo";
export const id="dl_9c5bfba8405743f0b21a";
export const url=new URL("../icons/fediverse-logo.svg?v=8c97f75fefca50bbad3115368ea99c9586fecf196a3657055ab7cec44521d7fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
