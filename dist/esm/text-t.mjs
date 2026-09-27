export const name="text-t";
export const id="dl_828ed40510c1c4ea6e44";
export const url=new URL("../icons/text-t.svg?v=b1669b0d75d9c35eea37dbba9223a76896c32f8270c36d852f58e80666ac95cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
