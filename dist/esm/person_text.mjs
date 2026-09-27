export const name="person_text";
export const id="dl_9204426332dfbc4f159f";
export const url=new URL("../icons/person_text.svg?v=56ad6407077240d64e8ea0ea2ec9ff9db54757e1f094cece0cfbe2a1c6b4aaa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
