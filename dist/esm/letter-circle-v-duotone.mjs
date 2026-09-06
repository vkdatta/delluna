export const name="letter-circle-v-duotone";
export const id="dl_8f47a853395b4b3db45d";
export const url=new URL("../icons/letter-circle-v-duotone.svg?v=4b54646220934ac7e5573b755493ad07c051318035e4f788f2152d47a57c9eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
