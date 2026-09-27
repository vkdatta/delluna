export const name="lock-simple-fill";
export const id="dl_38f5a67bc82b407fb9ae";
export const url=new URL("../icons/lock-simple-fill.svg?v=80282ca71aacc2ad6fdf406ca79682a7ef6bd0f029dd0a26ec391a66d9262154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
