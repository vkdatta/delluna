export const name="fork_left";
export const id="dl_24465a619926fc1cc2bf";
export const url=new URL("../icons/fork_left.svg?v=f5330fd108c89b3f6b9ae15f08279a00c9333240dc2b0be1aacc36b6e4609902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
