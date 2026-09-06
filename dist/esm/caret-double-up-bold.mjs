export const name="caret-double-up-bold";
export const id="dl_d9c045cbf12a4a6aa1e2";
export const url=new URL("../icons/caret-double-up-bold.svg?v=72d0c9d97b652f84465f52ab1d885b0f291c29d2dc38a830672446b5bc66b806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
