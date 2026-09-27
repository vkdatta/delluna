export const name="lucid_2-goal";
export const id="dl_75e35904337946f2b237";
export const url=new URL("../icons/lucid_2-goal.svg?v=490990c380751c63c354b8a5c56281606c8ed502bb3eaffeb2069089301e3a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
