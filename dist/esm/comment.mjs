export const name="comment";
export const id="dl_d37fd8110129e65974c4";
export const url=new URL("../icons/comment.svg?v=41866784a1b5ccc0649f0aeedc4ea06aa530912932cb658a3c59cbd228b5b112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
