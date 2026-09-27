export const name="text-t-slash-fill";
export const id="dl_32f23cab61422ebc6757";
export const url=new URL("../icons/text-t-slash-fill.svg?v=28312ef5b1ec71c0f4da743f48b5648df4de250fee3a7e8fb3a4feffb5bfd152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
