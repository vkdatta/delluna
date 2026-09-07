export const name="tag-chevron-thin";
export const id="dl_cdb741e1ec324145b08b";
export const url=new URL("../icons/T/tag-chevron-thin.svg?v=65abcc32967f3f7146dbc52b5037069a5ed2eb315819277aebda14034b8fa852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
