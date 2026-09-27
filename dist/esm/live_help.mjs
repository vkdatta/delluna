export const name="live_help";
export const id="dl_7be7345cb4cd8bdc91e4";
export const url=new URL("../icons/live_help.svg?v=04813590f94857942b8ac797c761174df1838a8f159f496a228e50d976b18516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
