export const name="markdown";
export const id="dl_ff974ba65563bfd0336d";
export const url=new URL("../icons/markdown.svg?v=ebf07e390448d7b64ce8a61c626c27e659997051bff665f4dec60417bcd645b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
