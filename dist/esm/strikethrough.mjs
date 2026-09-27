export const name="strikethrough";
export const id="dl_1bec68d538c2490daa10";
export const url=new URL("../icons/strikethrough.svg?v=a0e2909f81774b1da8dfe844336eb14dcffc29ff19ad7fb3adeb3a3667f8fbd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
