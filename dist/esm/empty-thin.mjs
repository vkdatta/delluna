export const name="empty-thin";
export const id="dl_020f1ab698d8462aac79";
export const url=new URL("../icons/empty-thin.svg?v=cda0963bb69d36ce2d0eb2118a6a37b712e758981f8ae3354d063b4d770e2d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
