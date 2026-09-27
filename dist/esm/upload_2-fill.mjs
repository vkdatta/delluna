export const name="upload_2-fill";
export const id="dl_9e82bb664d3501e1578d";
export const url=new URL("../icons/upload_2-fill.svg?v=184145fc407667d079fd97f6635ea6cf4dee387fefccbfccb8fc8f097bbf5d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
