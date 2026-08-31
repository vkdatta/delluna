export const name="logout";
export const id="dl_dafbbc02e84e6cb746a5";
export const url=new URL('../icons/logout.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
