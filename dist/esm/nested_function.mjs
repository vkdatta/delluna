export const name="nested_function";
export const id="dl_1a42c857f33b4b59ba87";
export const url=new URL("../icons/nested_function.svg?v=eb008442a7432d51c67753c5afd9e354ccb7f1c57176c9d6327202423bd09b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
