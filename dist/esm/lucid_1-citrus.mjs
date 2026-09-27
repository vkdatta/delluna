export const name="lucid_1-citrus";
export const id="dl_5a0bd832a20940428e7a";
export const url=new URL("../icons/lucid_1-citrus.svg?v=759c642cd8e4e726eccda95ef474a44873d970ca91fc2914beb054569d820c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
