export const name="lego-thin";
export const id="dl_05b5ab00d49b4b9f972b";
export const url=new URL("../icons/lego-thin.svg?v=69167d8c5fb143d4a85c84420ef5a1e6b88a1e0c5a30451ee61a3dabaeee01b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
