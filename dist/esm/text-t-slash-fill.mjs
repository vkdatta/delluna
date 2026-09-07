export const name="text-t-slash-fill";
export const id="dl_506f01875c594cb38685";
export const url=new URL("../icons/T/text-t-slash-fill.svg?v=66a203ce906e29da16d408f7f42212be0bbdf81ade14c2a387dd45eb563043da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
