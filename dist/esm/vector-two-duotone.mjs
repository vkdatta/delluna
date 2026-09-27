export const name="vector-two-duotone";
export const id="dl_c378492c8d4f2bc943ba";
export const url=new URL("../icons/vector-two-duotone.svg?v=e6cc034937b4e4f76eebd77872567aca45189a089ab43336f3dfb317e6c5d148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
