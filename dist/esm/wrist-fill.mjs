export const name="wrist-fill";
export const id="dl_84445063494358b7bbf0";
export const url=new URL("../icons/wrist-fill.svg?v=914cdeaf42a23de8c2631f160cbeaa6831a6d5e91ffe7839edc304b18c3e0589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
