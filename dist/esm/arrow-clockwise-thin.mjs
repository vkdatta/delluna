export const name="arrow-clockwise-thin";
export const id="dl_8b2ad88ee1aa4ab29c0c";
export const url=new URL("../icons/arrow-clockwise-thin.svg?v=48cfe098c0056e5a11da0ec9a446a97a80a0c65443c05f5a26916c1cbaecb487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
