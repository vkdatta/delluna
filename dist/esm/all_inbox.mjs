export const name="all_inbox";
export const id="dl_a269fb51cd0cc3bf52e8";
export const url=new URL("../icons/all_inbox.svg?v=b150f4fc839a1a00285661ed9965a3028db8d3a3de04302d07741e1bc0fdc3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
