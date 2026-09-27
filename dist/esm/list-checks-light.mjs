export const name="list-checks-light";
export const id="dl_b5f3eef5bb8546b7acb9";
export const url=new URL("../icons/list-checks-light.svg?v=8189b679666d68858d1b0c4fcf547f7131253644cf43e54d0788eb616dde9ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
