export const name="lock_person";
export const id="dl_1a1954061dab40b39fac";
export const url=new URL("../icons/lock_person.svg?v=b906207327e1ab767aab64863f12be893bc0e939ba2321c7f430d631aac8e421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
