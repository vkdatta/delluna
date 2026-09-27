export const name="first-aid-fill";
export const id="dl_079361ad91254541a48a";
export const url=new URL("../icons/first-aid-fill.svg?v=aa527695e85ab10587988d8ddfef5616eb9ea3f3431bd0aaf7e185f00a92ad21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
