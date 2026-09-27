export const name="pencil-circle-bold";
export const id="dl_9fc22f74554a4db0a4fb";
export const url=new URL("../icons/pencil-circle-bold.svg?v=488e345fffe96d471999552dc1c0e76aa6e9060c504b0a849b3fc4c00f3897e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
