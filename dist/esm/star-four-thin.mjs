export const name="star-four-thin";
export const id="dl_9ee0947c3e8c126fb48e";
export const url=new URL("../icons/star-four-thin.svg?v=22358cc67708e192e3ae131f58e331cbf835b531bae83a59d3f483bc8cd9915e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
