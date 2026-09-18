export const name="thread_unread-fill";
export const id="dl_6f6a364517f64d53aed8";
export const url=new URL("../icons/T/thread_unread-fill.svg?v=dc0a45d8232e69daa5b7fae9fcdde2c5d812cbd7255f677f4b745ea33352bc61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
