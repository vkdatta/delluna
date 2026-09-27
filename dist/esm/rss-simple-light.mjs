export const name="rss-simple-light";
export const id="dl_a795126f75794691b579";
export const url=new URL("../icons/rss-simple-light.svg?v=3b0845683e78efe716da91eec73ff89e57c6afe29f4e27ed3626ad48f0142df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
