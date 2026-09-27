export const name="users-four-fill";
export const id="dl_2cc27f75aff7cf71a49c";
export const url=new URL("../icons/users-four-fill.svg?v=db5ddd12809e8870edfbf3823fb26bc8d49b19c7f8c7e53a02c4751e7952c954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
