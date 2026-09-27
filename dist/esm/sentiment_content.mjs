export const name="sentiment_content";
export const id="dl_9ec8d0444e8f380fcb83";
export const url=new URL("../icons/sentiment_content.svg?v=c8998f1a4b60534f74ca8ae97a152bc3b01c66f02c1f24ea8ac3aebcdcf66f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
