export const name="person_search";
export const id="dl_9d444db7c06df2c2a358";
export const url=new URL("../icons/person_search.svg?v=11e2794a1f901195131a5ecff60ea12e82a59e42b4045b67e835659d6ce01ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
