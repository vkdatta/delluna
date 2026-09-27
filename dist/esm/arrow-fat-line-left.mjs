export const name="arrow-fat-line-left";
export const id="dl_b014db38c77c49ccbc0d";
export const url=new URL("../icons/arrow-fat-line-left.svg?v=4479713d4a60b6bac1629c2e5a99aef90938ee52addc7cca6e81207488ac2578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
