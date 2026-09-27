export const name="mode_comment";
export const id="dl_8d48703a4bf7c646bf1d";
export const url=new URL("../icons/mode_comment.svg?v=39c4b7d560c24c250359271587cd0ad6ba877de0f52afdccec37b0c135760bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
