export const name="briefcase-metal";
export const id="dl_fb7de842f9614816b71a";
export const url=new URL("../icons/briefcase-metal.svg?v=92bdc7b36ab5b6fbb05714159d1fbf861c150fcba3b4cfb673058b71f497530e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
