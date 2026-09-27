export const name="create_new_folder";
export const id="dl_053650391f93beac807d";
export const url=new URL("../icons/create_new_folder.svg?v=3c98e2749bc88e09b8cbe8ed43aed6c0a7eae6340c97b043e9abce2d5da368ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
