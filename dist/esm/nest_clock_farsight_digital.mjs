export const name="nest_clock_farsight_digital";
export const id="dl_ce61009d1d5d4fada6b8";
export const url=new URL("../icons/N/nest_clock_farsight_digital.svg?v=80a9c1be8905c7b0f8939d0de8c6d55d8c0d00191ee1c5b77cb3f233687dcc06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
