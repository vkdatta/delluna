export const name="microphone-slash-light";
export const id="dl_e594227ccb014c3bb246";
export const url=new URL("../icons/microphone-slash-light.svg?v=f21c3a57f4b5b53ab6f17a20789e1e14b7789bdd90156a837133d094cc916299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
