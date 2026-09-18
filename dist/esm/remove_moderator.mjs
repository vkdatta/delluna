export const name="remove_moderator";
export const id="dl_4f3509fc22704b5b9cf5";
export const url=new URL("../icons/R/remove_moderator.svg?v=85577d2c045717e8614a36c677bac45c943e2f73d567f08e413bff19f7fd2113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
