export const name="deskphone";
export const id="dl_e5d273c651846684bd65";
export const url=new URL("../icons/deskphone.svg?v=cc77e76835c421e4021f818d61a1b4a7f5ea1c38342956ed1634359cca8280c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
