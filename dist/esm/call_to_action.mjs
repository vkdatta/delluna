export const name="call_to_action";
export const id="dl_da04ab6d49ea30d4e317";
export const url=new URL("../icons/call_to_action.svg?v=ac5386f167121d43537cbb5f67e22b77673cd5cb92b48ad1360da4bb6b85b23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
