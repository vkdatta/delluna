export const name="list-bullets-light";
export const id="dl_4a92872f1e87423f80d1";
export const url=new URL("../icons/list-bullets-light.svg?v=9b49e1562081a96c7f09ceb447d6176036efeeb8eb30c269f17248ddb0224be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
