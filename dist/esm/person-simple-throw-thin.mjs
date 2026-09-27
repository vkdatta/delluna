export const name="person-simple-throw-thin";
export const id="dl_0f5bf11a22804896b3a9";
export const url=new URL("../icons/person-simple-throw-thin.svg?v=303900129f1c9598cd285d41e0dcdd4295224eb7d6558c9b801081022553e1e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
