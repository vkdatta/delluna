export const name="at-light";
export const id="dl_4d67ffc32d7c47588482";
export const url=new URL("../icons/at-light.svg?v=d98429cc1d63f8fc683be527eb6ef8ffb63f0ea06faf4ebf2a6ec5546352400a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
