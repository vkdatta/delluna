export const name="plus";
export const id="dl_217bda60a5aa7e5f4edd";
export const url=new URL("../icons/plus.svg?v=5f15863c35045fb4d3aba796621e3b5dcc7b7c92edaf8d2573c39ceac0e97532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
