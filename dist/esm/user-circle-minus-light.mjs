export const name="user-circle-minus-light";
export const id="dl_9f5bacdd2e8e4aa3ac07";
export const url=new URL("../icons/U/user-circle-minus-light.svg?v=b03d127bb5801f7488b47a3b0c0774c9892d4358c37728b5394e64a12707aee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
