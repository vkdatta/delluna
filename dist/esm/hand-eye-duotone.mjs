export const name="hand-eye-duotone";
export const id="dl_8f6031c519f24e0d9752";
export const url=new URL("../icons/hand-eye-duotone.svg?v=71c760c5fd39b98f04747f606649aefbe7e8d8f5e5e25d753ab44c126298e931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
