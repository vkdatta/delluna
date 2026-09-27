export const name="highlight_text_cursor";
export const id="dl_72e360b324b406ccf912";
export const url=new URL("../icons/highlight_text_cursor.svg?v=dfce55485f30e099888821975258d93cc33d7f66999f50e4e66e70bda7e993a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
