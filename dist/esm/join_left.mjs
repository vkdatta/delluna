export const name="join_left";
export const id="dl_2d0846b3ee1b196988d3";
export const url=new URL("../icons/join_left.svg?v=e2de3fbea0a36b67b4567e14b590abec4f5ed5e8f6c9fc80ef821128a547ebdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
