export const name="mark_as_unread";
export const id="dl_a06097bd36aa5af5e4e5";
export const url=new URL("../icons/mark_as_unread.svg?v=9deb18ac793e72651bc376d52c81044ed509f13deebacd650b9d219442791a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
