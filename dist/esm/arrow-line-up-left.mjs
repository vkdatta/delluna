export const name="arrow-line-up-left";
export const id="dl_2a88e78fdb364a12bdcd";
export const url=new URL("../icons/arrow-line-up-left.svg?v=49c3a88dab9490040858687166740fab35b927f2cc80acb4a2ccc2fea71bb6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
