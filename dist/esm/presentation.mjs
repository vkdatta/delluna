export const name="presentation";
export const id="dl_c7c185e6c5f74395847d";
export const url=new URL("../icons/presentation.svg?v=d8e2d45be2a13b2beb23d034db61413e3458c2552d96c826b2d2db1f3e287fd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
