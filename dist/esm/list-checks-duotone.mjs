export const name="list-checks-duotone";
export const id="dl_b30ed185c8e74bc4b40d";
export const url=new URL("../icons/list-checks-duotone.svg?v=89bb865fb48cc857e879a97a8efe7754993480d7351db60f464485db915924b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
