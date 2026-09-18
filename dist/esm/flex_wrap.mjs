export const name="flex_wrap";
export const id="dl_a9022964a95d4c7ebc65";
export const url=new URL("../icons/flex_wrap.svg?v=634fa5e7420a1cb44e010f83a590f3f080f293afacf0778d7dad708dd64f1177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
