export const name="comment-fill";
export const id="dl_2552ab29ca353996149b";
export const url=new URL("../icons/comment-fill.svg?v=85a8a0f35b8029f0c7edfe853811c63b8537bd42769e83566db53d5499916aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
