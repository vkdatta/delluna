export const name="assignment_globe";
export const id="dl_029eac7e9b0b394d3f80";
export const url=new URL("../icons/assignment_globe.svg?v=57976afcb87d9b5105d8321d944a5eaed6daf3b76cb43c0adf5b148c2eb6345f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
