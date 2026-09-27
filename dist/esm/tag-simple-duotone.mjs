export const name="tag-simple-duotone";
export const id="dl_b9a7490f71a220fec644";
export const url=new URL("../icons/tag-simple-duotone.svg?v=09e72ebcb20c3ee4387cafadf74d09124511029868d9e2781b4150fcf2a52944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
