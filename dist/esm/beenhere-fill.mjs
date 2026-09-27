export const name="beenhere-fill";
export const id="dl_890d79352e842665647e";
export const url=new URL("../icons/beenhere-fill.svg?v=8d1018e82d1dba598c511e448cf7a805728d30504d4fcff1eaef8ef2b1866bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
