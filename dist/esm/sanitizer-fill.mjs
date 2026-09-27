export const name="sanitizer-fill";
export const id="dl_484f3dce4f354168b0b9";
export const url=new URL("../icons/sanitizer-fill.svg?v=fc9b86c603af4bfdd5e45754541b2d962766aa70804528bd0aec0a543d4d7213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
