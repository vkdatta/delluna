export const name="lock-open-light";
export const id="dl_fdf4042cfcb34dd3a6e0";
export const url=new URL("../icons/lock-open-light.svg?v=dcf620cfcb1a6c7c7aff4448d254392690bdcdade7f4c2369ca5a8673037c638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
