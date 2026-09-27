export const name="caret-circle-up-down";
export const id="dl_81e53020b02b4afd913c";
export const url=new URL("../icons/caret-circle-up-down.svg?v=cde350ab500c481d93c5e6fced5cb0131a946441a0c2357d22914a04a3940fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
