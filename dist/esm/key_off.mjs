export const name="key_off";
export const id="dl_12c663b2b308d0df340d";
export const url=new URL("../icons/key_off.svg?v=422dbc3263ef52ffe464285a5108e78e8c76d5022c4755f76648a00b9ab9ca37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
