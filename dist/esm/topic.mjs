export const name="topic";
export const id="dl_673b14aadeb1c79867e8";
export const url=new URL("../icons/topic.svg?v=e867c26c495a33fdebbb25ee7591a1bf01a5287e44cffc8a71a0c198f26eb780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
