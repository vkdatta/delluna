export const name="check-bold";
export const id="dl_2d27fe36a0304005aff4";
export const url=new URL("../icons/check-bold.svg?v=d0ca4e324ff5bb3a1a3bacb9f7580359b8e03cc6862a614d5ed14458db64bedf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
