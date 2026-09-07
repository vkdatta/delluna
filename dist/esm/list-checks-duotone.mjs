export const name="list-checks-duotone";
export const id="dl_b30ed185c8e74bc4b40d";
export const url=new URL("../icons/list-checks-duotone.svg?v=aa71967b96fc44f2e40fabf3b297e333925c994cc22a2da2177980b7eea5a55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
