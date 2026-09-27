export const name="bowling-ball-duotone";
export const id="dl_6d968496d4db4701909f";
export const url=new URL("../icons/bowling-ball-duotone.svg?v=13fee82c8648180097161012df71934b07c4a8938be279fa0ac6e32623116624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
