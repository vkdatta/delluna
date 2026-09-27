export const name="conversation-fill";
export const id="dl_acd1deb073c7c8fb234b";
export const url=new URL("../icons/conversation-fill.svg?v=e34edf3551fc7eeaab38a42cd020cb6e1469c4a212648eec4defbf6795e8825b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
