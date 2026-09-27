export const name="lock_person";
export const id="dl_bf8014095b80897e19e5";
export const url=new URL("../icons/lock_person.svg?v=b906207327e1ab767aab64863f12be893bc0e939ba2321c7f430d631aac8e421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
