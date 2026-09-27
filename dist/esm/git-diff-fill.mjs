export const name="git-diff-fill";
export const id="dl_2ebe964e0ce84bc89047";
export const url=new URL("../icons/git-diff-fill.svg?v=0c08bd90d7a0f44457c904cded03c366e9f84c72581debd703c0654eeb6adfec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
