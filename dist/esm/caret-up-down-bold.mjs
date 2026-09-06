export const name="caret-up-down-bold";
export const id="dl_4d712f8b648a4c30974b";
export const url=new URL("../icons/caret-up-down-bold.svg?v=a3ffa8c728724bf8ace313bcfd2c854ad3c0b47926440f763e94e75c9820f9f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
