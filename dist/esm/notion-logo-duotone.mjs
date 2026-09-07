export const name="notion-logo-duotone";
export const id="dl_62575c73e16d4836938a";
export const url=new URL("../icons/notion-logo-duotone.svg?v=ed272f6d87ed1e40f0b5cc421f4ee27c4185e6cb0e5194c5d9f9018f0517f2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
