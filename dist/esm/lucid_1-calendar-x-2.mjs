export const name="lucid_1-calendar-x-2";
export const id="dl_34c8f2d159aa49d18431";
export const url=new URL("../icons/lucid_1-calendar-x-2.svg?v=4ca923374f91f8308dfaa1cb75054d74ad03fd5a453020ead6dd8ba4c44d2bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
