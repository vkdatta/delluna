export const name="trend-up";
export const id="dl_ccfedf2e378d4ce7bd83";
export const url=new URL("../icons/T/trend-up.svg?v=d99a74c39fecc099ed7e774f6306fc8137ff63011edea27e06e17c9582454ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
