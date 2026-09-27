export const name="newspaper";
export const id="dl_5f61da5328eb4ebfb6f3";
export const url=new URL("../icons/newspaper.svg?v=2861c577a4745360dd5fc688b9972b4a3f2fddb38c89e39fa0d7bcc45fd2fe0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
