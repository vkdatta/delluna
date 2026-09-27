export const name="lucid_2-link-2-off";
export const id="dl_236ce09ff08f463fbf94";
export const url=new URL("../icons/lucid_2-link-2-off.svg?v=bd765865fd2bbff1edc0d231cfddf4b6cc28765944010ec43b93ef99b5038a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
