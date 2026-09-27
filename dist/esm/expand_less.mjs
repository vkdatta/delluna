export const name="expand_less";
export const id="dl_47f77e91c0346c6983bb";
export const url=new URL("../icons/expand_less.svg?v=328e73364e76c54f0fad650589a5c01d845b035e1c4c301dfe78ed7f0aca1f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
