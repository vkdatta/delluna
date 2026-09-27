export const name="baseball-cap-thin";
export const id="dl_6522988c3f9b40ad97ba";
export const url=new URL("../icons/baseball-cap-thin.svg?v=d2aa5b8ed311aabbf3cf2182fc268cf1cd5368b53e778a0f400c39eaeba15709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
