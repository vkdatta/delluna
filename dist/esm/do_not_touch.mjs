export const name="do_not_touch";
export const id="dl_3fc397baba61f2170718";
export const url=new URL("../icons/do_not_touch.svg?v=4bae665f4b26df59526b05adf509afe337eea7b1208530a5254c0eb4936f787d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
