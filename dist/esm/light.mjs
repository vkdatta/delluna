export const name="light";
export const id="dl_d2694a6aa6964eea635c";
export const url=new URL("../icons/light.svg?v=cdbcf8c3bfcd66822c9bef8ebd9eaca7ca57bb2979f08625942cf3578ce43f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
