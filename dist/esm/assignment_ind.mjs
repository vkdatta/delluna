export const name="assignment_ind";
export const id="dl_1bb2bbfb1c558326f630";
export const url=new URL("../icons/assignment_ind.svg?v=001df21e955ae39102c50b9249e28b64234b0360c0a770f5b687b32b38eec50c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
