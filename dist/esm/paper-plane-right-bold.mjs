export const name="paper-plane-right-bold";
export const id="dl_601be2e9bb51428ab3ce";
export const url=new URL("../icons/paper-plane-right-bold.svg?v=6952ad0ffc0f565a00231f797891d001e0e36b68255cb402b13bccf881f8d27f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
