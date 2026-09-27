export const name="speaker_phone";
export const id="dl_f9a4641b9032ac930f4f";
export const url=new URL("../icons/speaker_phone.svg?v=51127cd9394bc4dbbb1a90197bb5f6c0bbf798458b7b605b8953b225f3044235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
