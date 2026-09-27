export const name="high-definition-thin";
export const id="dl_5557ca1f61454107bbe9";
export const url=new URL("../icons/high-definition-thin.svg?v=c00f4563d8e09ad4010b23c40019138da87c8965e9359f8f032aa465a1fc3d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
