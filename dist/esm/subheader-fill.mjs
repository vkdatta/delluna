export const name="subheader-fill";
export const id="dl_9e71dbb8d784d9e1db41";
export const url=new URL("../icons/subheader-fill.svg?v=bbcfc8c760fe87b2d3cdfb55796a9b8e2b6762b6854265ea5161214d327f0e8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
