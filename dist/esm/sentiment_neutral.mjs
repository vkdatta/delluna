export const name="sentiment_neutral";
export const id="dl_789d502fdaa3a4721a44";
export const url=new URL("../icons/sentiment_neutral.svg?v=e0ab1b7ff28381c344794c929a414f91874dbc8a638339a44cf921b416bc1f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
