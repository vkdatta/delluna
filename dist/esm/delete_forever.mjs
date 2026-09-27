export const name="delete_forever";
export const id="dl_655ce1e5a059778a6d34";
export const url=new URL("../icons/delete_forever.svg?v=978a06b7b470ad253dadb7f999cbd379f4781f58b8dac6edf51aab08fd08416c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
