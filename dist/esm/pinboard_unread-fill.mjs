export const name="pinboard_unread-fill";
export const id="dl_500c71f09053aefb7c34";
export const url=new URL("../icons/pinboard_unread-fill.svg?v=df13a714f137708e5a8c0dc0eea208ed25e503fae0dcc50ed17e73212c5d56bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
