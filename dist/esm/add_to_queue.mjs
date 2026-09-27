export const name="add_to_queue";
export const id="dl_b354a397a4409be8a65b";
export const url=new URL("../icons/add_to_queue.svg?v=7d1b340af24f7360612335f06bbf0dd3615d26e2b4f7e9c31b56afc3d635b725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
