export const name="lucid_1-citrus";
export const id="dl_5a0bd832a20940428e7a";
export const url=new URL("../icons/lucid_1-citrus.svg?v=8b409769b74fa41bb8a04e16b10888c7feb9278743e2d08213400e4d7ea712fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
