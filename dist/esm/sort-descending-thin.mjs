export const name="sort-descending-thin";
export const id="dl_9bdef415f26e04b1cfb9";
export const url=new URL("../icons/sort-descending-thin.svg?v=d74f768f4fb14ba31b3a0bbd63a46c93cb3be104cf5dda30ee2730bdea48e289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
